
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json;
using Microsoft.Extensions.Logging;
using JapaniseTextClassifier;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace JapaniseTextClassifierFunction
{
    public class JapaniseTextClassifierFunction
    {
        private IJapaniseTextClassifier _service;

        public JapaniseTextClassifierFunction(IJapaniseTextClassifier classifier)
        {
            _service = classifier;
        }

        [FunctionName("JapaniseTextClassifierFunction")]
        public IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "v1/classify")]Request body,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            // XXX ’ÇÕ—p‚ÌID‚ ‚Á‚½‹C‚ª‚·‚é‚Ì‚Å‚»‚¿‚ç‚ðŽæ‚è‚½‚¢ -> Œ©“–‚½‚ç‚È‚¢
            var id = Guid.NewGuid();
            var result = _service.Execute(new TextInput(id.ToString(), body.Text), new Config()
            {
                ClassifierName = body.ClassifierName,
                TranslatorName = body.TranslatorName,
                NormalizerName = "", // XXX
            });

            var response = new Response()
            {
                Categories = result.Categories,
                TranslatedText = result.TranslatedText,
                HasError = result.HasError,
                Request = body,
            };

            log.LogInformation(JsonConvert.SerializeObject(response));

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
            public Request Request { get; set; }
            public bool HasError { get; set; }
            public string TranslatedText { get; set; }
            public ICollection<Category> Categories { get; set; }
        }

        public class Config : IJapaniseTextClassifierExecuteConfig
        {
            public string TranslatorName { get; set; }
            public string ClassifierName { get; set; }
            public string NormalizerName { get; set; }
        }
    }
}
