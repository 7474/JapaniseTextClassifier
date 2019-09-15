using Aliencube.AzureFunctions.Extensions.OpenApi.Attributes;
using JapaniseTextClassifier;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.WindowsAzure.Storage.Table;
using Newtonsoft.Json;
using SkiaSharp;
using SkiaSharp.Extended.Svg;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace JapaniseTextClassifierFunction
{
    public class JapaniseTextClassifierFunction
    {
        private IJapaniseTextClassifier _service;

        public JapaniseTextClassifierFunction(IJapaniseTextClassifier classifier)
        {
            _service = classifier;
        }

        [FunctionName("ClassifyJapaniseText")]
        [OpenApiOperation("ClassifyJapaniseText", "classification")]
        [OpenApiRequestBody("application/json", typeof(Request))]
        [OpenApiResponseBody(HttpStatusCode.OK, "application/json", typeof(Response))]
        public async Task<IActionResult> Classify(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "v1/classify")]HttpRequest req,
            [Table("ClassifyResult")]ICollector<ResponseTableEntity> tableCollector,
            [Queue("ClassifyResultCreate")]ICollector<string> queueCollector,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            var body = JsonConvert.DeserializeObject<Request>(await req.ReadAsStringAsync());
            var authId = AuthId.From(req);
            var isLocal = String.IsNullOrEmpty(Environment.GetEnvironmentVariable("WEBSITE_INSTANCE_ID"));
            if (isLocal)
            {
                authId.PrincipalIdp = "local";
                authId.PrincipalId = "local-id";
                authId.PrincipalName = "local-name";
            }
            if (!authId.IsLogin)
            {
                return new UnauthorizedResult();
            }

            log.LogInformation(string.Join(",\n", req.Headers.Select(x => x.ToString())));
            log.LogInformation(JsonConvert.SerializeObject(authId));

            // XXX 追跡用のIDあった気がするのでそちらを取りたい -> 見当たらない
            var id = Guid.NewGuid();
            var result = _service.Execute(new TextInput(id.ToString(), body.Text), new Config()
            {
                ClassifierName = body.ClassifierName,
                TranslatorName = body.TranslatorName,
                NormalizerName = "", // XXX
            });

            var rowKey = string.Format("{0:x16}", DateTime.MaxValue.Ticks - DateTime.UtcNow.Ticks) + "-" + id.ToString();
            var response = new Response()
            {
                Id = rowKey,
                Categories = result.Categories.ToList(),
                TranslatedText = result.TranslatedText,
                HasError = result.HasError,
                Request = body,
            };

            var jsonResponse = JsonConvert.SerializeObject(response);
            var tableEntity = new ResponseTableEntity()
            {
                PartitionKey = "ja-en",
                RowKey = rowKey,
                AuthIdp = authId.PrincipalIdp,
                AuthId = authId.PrincipalId,
                AuthName = authId.PrincipalName,
                ResponseData = jsonResponse,
            };
            tableCollector.Add(tableEntity);
            queueCollector.Add(rowKey);

            log.LogInformation(jsonResponse);

            return new OkObjectResult(response);
        }

        [FunctionName("CreateOgImage")]
        public static void CreateOgImage(
            [QueueTrigger("ClassifyResultCreate")] string input,
            [Table("ClassifyResult", "ja-en", "{queueTrigger}")] ResponseTableEntity tableEntity,
            [Blob("classifyresultogimage/{queueTrigger}.png", FileAccess.Write)] Stream imageStream,
            ILogger log)
        {
            log.LogInformation($"Handle {input}");
            var response = JsonConvert.DeserializeObject<Response>(tableEntity.ResponseData);
            var barFactor = 600;
            var adultBar = response.Categories.First(x => x.Name == "Adult").Score * barFactor;
            var racyBar = response.Categories.First(x => x.Name == "Racy").Score * barFactor;
            var offensiveBar = response.Categories.First(x => x.Name == "Offensive").Score * barFactor;
            var svgString = $@"<?xml version=""1.0""?>
<svg width=""960""
     height=""480""
     xmlns=""http://www.w3.org/2000/svg""
     xmlns:svg=""http://www.w3.org/2000/svg"">
  <g class=""layer"">
    <text fill=""#000000""
          font-family=""Meiryo""
          font-size=""48""
          id=""svg_1""
          stroke=""#000000""
          stroke-width=""0""
          text-anchor=""start""
          x=""32""
          y=""48"">JapaniseTextClassifier</text>
    <switch>
      <foreignObject x=""64""
                     y=""64""
                     width=""832""
                     height=""240"">
        <p xmlns=""http://www.w3.org/1999/xhtml"" style=""font-size: 24px; font-family: Meiryo;"">
          {response.Request.Text}
        </p>
      </foreignObject>

      <text fill=""#000000""
            font-family=""Meiryo""
            font-size=""24""
            id=""svg_2""
            stroke=""#000000""
            stroke-width=""0""
            text-anchor=""start""
            x=""64""
            y=""96"">{response.Request.Text}</text>
    </switch>
    <text fill=""#000000""
          font-family=""Meiryo""
          font-size=""24""
          id=""svg_3""
          stroke=""#000000""
          stroke-width=""0""
          text-anchor=""start""
          x=""64""
          y=""370"">Adult</text>
    <text fill=""#000000""
          font-family=""Meiryo""
          font-size=""24""
          id=""svg_4""
          stroke=""#000000""
          stroke-width=""0""
          text-anchor=""start""
          x=""64""
          y=""410"">Racy</text>
    <text fill=""#000000""
          font-family=""Meiryo""
          font-size=""24""
          id=""svg_5""
          stroke=""#000000""
          stroke-width=""0""
          text-anchor=""start""
          x=""64""
          y=""450"">Offensive</text>
    <rect fill=""#000000""
          height=""32""
          id=""svg_6""
          stroke=""#000000""
          stroke-width=""5""
          width=""{adultBar}""
          x=""240""
          y=""340""/>
    <rect fill=""#000000""
          height=""32""
          id=""svg_7""
          stroke=""#000000""
          stroke-width=""5""
          width=""{racyBar}""
          x=""240""
          y=""380""/>
    <rect fill=""#000000""
          height=""32""
          id=""svg_8""
          stroke=""#000000""
          stroke-width=""5""
          width=""{offensiveBar}""
          x=""240""
          y=""420""/>
  </g>
</svg>";
            var svg = new SkiaSharp.Extended.Svg.SKSvg();
            var pict = svg.Load(new MemoryStream(Encoding.UTF8.GetBytes(svgString)));
            var dimen = new SKSizeI(
                (int)Math.Ceiling(pict.CullRect.Width),
                (int)Math.Ceiling(pict.CullRect.Height)
            );
            var matrix = SKMatrix.MakeScale(1, 1);
            var img = SKImage.FromPicture(pict, dimen, matrix);
            var quality = 90;
            var skdata = img.Encode(SkiaSharp.SKEncodedImageFormat.Png, quality);
            skdata.SaveTo(imageStream);
            log.LogInformation(svgString);
        }

        [FunctionName("GetShareClassifyResult")]
        [OpenApiOperation("GetShareClassifyResult", "classification")]
        [OpenApiParameter("id", In = ParameterLocation.Path)]
        [OpenApiResponseBody(HttpStatusCode.OK, "text/html", typeof(string))]
        public HttpResponseMessage GetShareClassifyResult(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "v1/classify/share/{id}")]HttpRequest req,
            [Table("ClassifyResult", "ja-en", "{id}")] ResponseTableEntity tableEntity,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            var shareUrlBase = Environment.GetEnvironmentVariable("SHARE_URL_BASE");
            var imageUrlBase = Environment.GetEnvironmentVariable("SHARE_IMAGE_URL_BASE");

            var response = JsonConvert.DeserializeObject<Response>(tableEntity.ResponseData);
            var shareUrl = shareUrlBase + response.Id;
            var description = HttpUtility.HtmlEncode(response.Request.Text.Replace("\r", "").Replace("\n", ""));
            var imageUrl = imageUrlBase + response.Id + ".png";
            var html = $@"<!DOCTYPE html>
<html>
  <head>
    <meta charset=""utf-8"">
    <title>JapaniseTextClassifier</title>
    <meta name=""twitter:card"" content=""summary_large_image"">
    <meta name=""twitter:site"" content=""@koudenpa"">
    <meta property=""og:url"" content=""{shareUrl}"">
    <meta property=""og:title"" content=""JapaniseTextClassifier"">
    <meta property=""og:description"" content=""{description}"">
    <meta property=""og:image"" content=""{imageUrl}"">
  </head>
  <body>
    <script>
      location.href = ""{shareUrl}"";
    </script>
  </body>
</html>
";
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.OK,
                Content = new StringContent(html, Encoding.UTF8, "text/html"),
            };
        }

        [FunctionName("GetClassifyResult")]
        [OpenApiOperation("GetClassifyResult", "classification")]
        [OpenApiParameter("id", In = ParameterLocation.Path)]
        [OpenApiResponseBody(HttpStatusCode.OK, "application/json", typeof(Response))]
        public IActionResult GetClassifyResult(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "v1/classify/{id}")]HttpRequest req,
            [Table("ClassifyResult", "ja-en", "{id}")] ResponseTableEntity tableEntity,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            return new OkObjectResult(JsonConvert.DeserializeObject<Response>(tableEntity.ResponseData));
        }

        [FunctionName("GetClassifyResultList")]
        [OpenApiOperation("GetClassifyResultList", "classification")]
        [OpenApiParameter("offset", In = ParameterLocation.Query)]
        [OpenApiResponseBody(HttpStatusCode.OK, "application/json", typeof(ListResponse))]
        public async Task<IActionResult> GetClassifyResultList(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "v1/classify")]HttpRequest req,
            [Table("ClassifyResult")] CloudTable cloudTable,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string offset = req.Query["offset"];
            var query = new TableQuery<ResponseTableEntity>().Where(
                TableQuery.CombineFilters(
                    TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, "ja-en"),
                    TableOperators.And,
                    TableQuery.GenerateFilterCondition("RowKey", QueryComparisons.GreaterThan, offset ?? "0")));
            // XXX テケトー
            query.TakeCount = 10;

            var tableEntities = (await cloudTable.ExecuteQuerySegmentedAsync(query, null)).ToList();
            var response = new ListResponse()
            {
                NextOffest = tableEntities.Max(x => x.RowKey),
                Items = tableEntities.Select(x => JsonConvert.DeserializeObject<Response>(x.ResponseData)).ToList(),
            };

            return new OkObjectResult(response);
        }

        public class AuthId
        {
            public string PrincipalIdp { get; set; }
            public string PrincipalId { get; set; }
            public string PrincipalName { get; set; }

            public bool IsLogin => !string.IsNullOrEmpty(PrincipalId);

            public static AuthId From(HttpRequest req)
            {
                return new AuthId()
                {
                    PrincipalIdp = req.Headers["X-MS-CLIENT-PRINCIPAL-IDP"],
                    PrincipalId = req.Headers["X-MS-CLIENT-PRINCIPAL-ID"],
                    PrincipalName = req.Headers["X-MS-CLIENT-PRINCIPAL-NAME"],
                };
            }
        }
        public class Request
        {
            [Required]
            [MaxLength(32)]
            public string TranslatorName { get; set; }
            [Required]
            [MaxLength(32)]
            public string ClassifierName { get; set; }
            [Required]
            [MaxLength(800)]
            public string Text { get; set; }
        }

        public class Response
        {
            public string Id { get; set; }
            public Request Request { get; set; }
            public bool HasError { get; set; }
            public string TranslatedText { get; set; }
            public IList<Category> Categories { get; set; }
        }

        public class ListResponse
        {
            public string NextOffest { get; set; }
            public IList<Response> Items { get; set; }
        }

        public class ResponseTableEntity : TableEntity
        {
            public string AuthIdp { get; set; }
            public string AuthId { get; set; }
            public string AuthName { get; set; }
            public string ResponseData { get; set; }
        }

        public class Config : IJapaniseTextClassifierExecuteConfig
        {
            public string TranslatorName { get; set; }
            public string ClassifierName { get; set; }
            public string NormalizerName { get; set; }
        }
    }
}
