using Aliencube.AzureFunctions.Extensions.OpenApi.Abstractions;
using Aliencube.AzureFunctions.Extensions.OpenApi.Attributes;
using Aliencube.AzureFunctions.Extensions.OpenApi.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi;
using System.Net;
using System.Reflection;
using System.Threading.Tasks;

namespace JapaniseTextClassifierFunction
{
    public class OpenApiHttpTrigger
    {
        private AppSettings settings;
        private IDocumentHelper helper;
        private IDocument document;
        private ISwaggerUI swaggerUi;

        public OpenApiHttpTrigger(
            AppSettings settings,
            IDocumentHelper helper,
            IDocument document,
            ISwaggerUI swaggerUi
            )
        {
            this.settings = settings;
            this.helper = helper;
            this.document = document;
            this.swaggerUi = swaggerUi;
        }

        [FunctionName(nameof(RenderOpenApiDocument))]
        [OpenApiIgnore]
        public async Task<IActionResult> RenderOpenApiDocument(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "openapi/{version}.{extension}")] HttpRequest req,
            string version,
            string extension,
            ILogger log)
        {
            log.LogInformation("Call RenderOpenApiDocument");

            var ver = version.Contains("3") ? OpenApiSpecVersion.OpenApi3_0 : OpenApiSpecVersion.OpenApi2_0;
            var ext = extension.ToLower().Contains("y") ? OpenApiFormat.Yaml : OpenApiFormat.Json;

            var result = await document.InitialiseDocument()
                                       .AddMetadata(settings.OpenApiInfo)
                                       .AddServer(req, settings.HttpSettings.RoutePrefix)
                                       .Build(Assembly.GetExecutingAssembly())
                                       .RenderAsync(ver, ext)
                                       .ConfigureAwait(false);

            var response = new ContentResult()
            {
                Content = result,
                ContentType = ext == OpenApiFormat.Yaml ? "application/yaml" : "application/json",
                StatusCode = (int)HttpStatusCode.OK
            };

            return response;
        }

        [FunctionName(nameof(RenderSwaggerUI))]
        [OpenApiIgnore]
        public async Task<IActionResult> RenderSwaggerUI(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "swagger/ui")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("Call RenderSwaggerUI");

            var result = await swaggerUi.AddMetadata(settings.OpenApiInfo)
                                 .AddServer(req, settings.HttpSettings.RoutePrefix)
                                 .BuildAsync()
                                 .RenderAsync("openapi/v2.json", settings.SwaggerAuthKey)
                                 .ConfigureAwait(false);

            var response = new ContentResult()
            {
                Content = result,
                ContentType = "text/html",
                StatusCode = (int)HttpStatusCode.OK
            };

            return response;
        }
    }
}
