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
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

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
        public IActionResult Classify(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "v1/classify")]Request body,
            [Table("ClassifyResult")]ICollector<ResponseTableEntity> collector,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

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
                ResponseData = jsonResponse,
            };
            collector.Add(tableEntity);

            log.LogInformation(jsonResponse);

            return new OkObjectResult(response);
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
