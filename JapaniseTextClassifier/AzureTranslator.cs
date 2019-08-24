using CognitiveServices.Translator;
using CognitiveServices.Translator.Configuration;
using CognitiveServices.Translator.Translate;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Linq;

namespace JapaniseTextClassifier
{
    public interface IAzureTranslatorConfig
    {
        string SubscriptionKey { get; }
    }

    public class AzureTranslator : ITranslator
    {
        private readonly ILogger _logger;
        private IAzureTranslatorConfig _config;
        private ITranslateClient client;

        public AzureTranslator(IAzureTranslatorConfig config, ILogger<AzureTranslator> logger)
        {
            _logger = logger;
            _config = config;

            // https://github.com/Nordes/CognitiveServices.Translator.Client
            client = new TranslateClient(new CognitiveServicesConfig()
            {
                SubscriptionKey = _config.SubscriptionKey,
            });
        }

        public string Name { get { return "AzureTranslator"; } }

        public string Translate(string text)
        {
            var response = client.Translate(
                new RequestContent(text),
                new RequestParameter
                {
                    From = "ja",
                    To = new[] { "en" },
                });

            _logger.LogDebug(JsonConvert.SerializeObject(response));

            // 1つ返ってくることを決め打ち
            return response.First().Translations.First().Text;
        }
    }
}
