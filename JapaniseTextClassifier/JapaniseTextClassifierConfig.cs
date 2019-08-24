using Newtonsoft.Json;

namespace JapaniseTextClassifier
{
    public class JapaniseTextClassifierConfig : IJapaniseTextClassifierExecuteConfig,
        IAzureTranslatorConfig, IAzureClassifierConfig,
        IGcpTranslatorConfig, IGcpClassifierConfig
    {
        public string NormalizerName { get; set; }
        public string TranslatorName { get; set; }
        public string ClassifierName { get; set; }

        [JsonIgnore]
        public string AzureTranslatorSubscriptionKey { get; set; }
        [JsonIgnore]
        public string AzureClassifierSubscriptionKey { get; set; }
        [JsonIgnore]
        public string GcpTranslatorApiKey { get; set; }

        [JsonIgnore]
        string IAzureTranslatorConfig.SubscriptionKey => AzureTranslatorSubscriptionKey;
        [JsonIgnore]
        string IAzureClassifierConfig.SubscriptionKey => AzureClassifierSubscriptionKey;
        [JsonIgnore]
        string IGcpTranslatorConfig.ApiKey => GcpTranslatorApiKey;
    }
}
