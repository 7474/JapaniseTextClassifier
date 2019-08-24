using Microsoft.Azure.CognitiveServices.ContentModerator;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace JapaniseTextClassifier
{
    public interface IAzureClassifierConfig
    {
        string SubscriptionKey { get; }
    }

    public class AzureClassifier : IClassifier
    {
        // https://docs.microsoft.com/ja-jp/azure/cognitive-services/content-moderator/text-moderation-quickstart-dotnet
        private static readonly string AzureRegion = "japaneast";
        private static readonly string AzureBaseURL = $"https://{AzureRegion}.api.cognitive.microsoft.com";

        private readonly ILogger _logger;
        private IAzureClassifierConfig _config;
        private ContentModeratorClient client;
        public AzureClassifier(IAzureClassifierConfig config, ILogger<AzureClassifier> logger)
        {
            _logger = logger;
            _config = config;

            client = new ContentModeratorClient(new ApiKeyServiceClientCredentials(_config.SubscriptionKey));
            client.Endpoint = AzureBaseURL;
        }
        public string Name { get { return "AzureClassifier"; } }

        public ICollection<Category> Classify(string text)
        {
            // https://azure.microsoft.com/ja-jp/pricing/details/cognitive-services/content-moderator/
            // XXX テキストの最大文字長は 1024 です。
            var screenResult = client.TextModeration.ScreenText(
                "text/plain",
                // エラーするよりはいい、エラーするよりはな
                new MemoryStream(Encoding.UTF8.GetBytes(text.Length > 1024 ? text.Substring(0, 1024) : text)),
                language: "eng",
                classify: true
            );

            _logger.LogDebug(JsonConvert.SerializeObject(screenResult));

            var results = new List<Category>();
            if (screenResult.Classification.Category1.Score.HasValue)
            {
                results.Add(new Category()
                {
                    Name = "Adult",
                    Score = screenResult.Classification.Category1.Score.Value,
                });
            }
            if (screenResult.Classification.Category2.Score.HasValue)
            {
                results.Add(new Category()
                {
                    Name = "Racy",
                    Score = screenResult.Classification.Category2.Score.Value,
                });
            }
            if (screenResult.Classification.Category3.Score.HasValue)
            {
                results.Add(new Category()
                {
                    Name = "Offensive",
                    Score = screenResult.Classification.Category3.Score.Value,
                });
            }

            return results;
        }
    }
}
