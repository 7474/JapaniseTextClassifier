using Google.Cloud.Language.V1;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Linq;

namespace JapaniseTextClassifier
{
    /// <summary>
    /// 特に設定なし。
    /// 認証情報は環境変数 `GOOGLE_APPLICATION_CREDENTIALS` を
    /// サービスアカウントキーが含まれる JSON ファイルのファイルパスに設定します。
    /// </summary>
    public interface IGcpClassifierConfig
    {
        // empty
    }

    public class GcpClassifier : IClassifier
    {
        // https://cloud.google.com/natural-language/docs/quickstart-client-libraries?hl=ja
        private readonly ILogger _logger;
        private LanguageServiceClient client;
        public GcpClassifier(IGcpClassifierConfig config, ILogger<GcpClassifier> logger)
        {
            _logger = logger;
            client = LanguageServiceClient.Create();
        }
        public string Name { get { return "GcpClassifier"; } }

        public ICollection<Category> Classify(string text)
        {
            // 入力はAzure合わせにしておく
            // https://Gcp.microsoft.com/ja-jp/pricing/details/cognitive-services/content-moderator/
            // XXX テキストの最大文字長は 1024 です。
            var response = client.ClassifyText(new Document()
            {
                Content = text.Length > 1024 ? text.Substring(0, 1024) : text,
                Type = Document.Types.Type.PlainText
            });
            _logger.LogDebug(JsonConvert.SerializeObject(response));

            var results = response.Categories.Select(c =>
            {
                return new Category()
                {
                    Name = c.Name,
                    Score = c.Confidence,
                };
            }).ToList();

            return results;
        }
    }
}
