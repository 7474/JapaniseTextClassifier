using CognitiveServices.Translator;
using CognitiveServices.Translator.Configuration;
using CognitiveServices.Translator.Translate;
using Newtonsoft.Json;
using System.Linq;

namespace JapaniseTextClassifier
{
    interface IAzureTranslatorConfig
    {
        string SubscriptionKey { get; }
    }

    class AzureTranslator : ITranslator
    {
        private IAzureTranslatorConfig _config;
        private ITranslateClient client;

        public AzureTranslator(IAzureTranslatorConfig config)
        {
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

            // XXX ロガー
            System.Console.WriteLine(JsonConvert.SerializeObject(response));

            // 1つ返ってくることを決め打ち
            return response.First().Translations.First().Text;
        }
    }
}
