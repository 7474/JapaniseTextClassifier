using System;
using System.Collections.Generic;
using System.Text;

namespace JapaniseTextClassifier
{
    interface IAzureTranslatorConfig
    {
        string SubscriptionKey { get; }
    }

    class AzureTranslator : ITranslator
    {
        private IAzureTranslatorConfig _config;

        public AzureTranslator(IAzureTranslatorConfig config)
        {
            _config = config;
        }

        public string Name { get { return "AzureTranslator"; } }

        public string Translate(string text)
        {
            return "this is english text.";
        }
    }
}
