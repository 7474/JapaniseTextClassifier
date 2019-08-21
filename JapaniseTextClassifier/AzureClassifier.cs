using System;
using System.Collections.Generic;
using System.Text;

namespace JapaniseTextClassifier
{
    interface IAzureClassifierConfig
    {
        string SubscriptionKey { get; }
    }

    class AzureClassifier : IClassifier
    {
        private IAzureClassifierConfig _config;
        public AzureClassifier(IAzureClassifierConfig config)
        {
            _config = config;
        }
        public string Name { get { return "AzureClassifier"; } }

        public ICollection<Category> Classify(string text)
        {
            return new List<Category>()
            {
                new Category()
                {
                    Name = "Adult",
                    Score = 1.0,
                },
                new Category()
                {
                    Name = "Tensei",
                    Score = 0.5,
                },
            };
        }
    }
}
