﻿using Google.Cloud.Translation.V2;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace JapaniseTextClassifier
{
    public interface IGcpTranslatorConfig
    {
        string ApiKey { get; }
    }

    public class GcpTranslator : ITranslator
    {
        // https://cloud.google.com/translate/docs/quickstart-client-libraries
        private readonly ILogger _logger;
        private TranslationClient client;
        public string Name => "GcpTranslator";

        public GcpTranslator(IGcpTranslatorConfig config, ILogger<GcpTranslator> logger)
        {
            _logger = logger;
            client = TranslationClient.CreateFromApiKey(config.ApiKey);
        }

        public string Translate(string text)
        {
            var response = client.TranslateText(text, "en", "ja");
            _logger.LogDebug(JsonConvert.SerializeObject(response));

            return response.TranslatedText;
        }
    }
}
