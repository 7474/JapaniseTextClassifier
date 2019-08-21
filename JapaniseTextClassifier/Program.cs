using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace JapaniseTextClassifier
{
    class Program
    {
        static void Main(string[] args)
        {
            // XXX こんふぃぐれーしょん
            var config = new ExecuteConfig()
            {
                ResultDataDir = "./results",
                //
                NormalizerName = "HtmlNormalizer",
                TranslatorName = "AzureTranslator",
                ClassifierName = "AzureClassifier",
                //
                AzureTranslatorSubscriptionKey = "XXX",
                AzureClassifierSubscriptionKey = "XXX",
            };
            var inputs = args.SelectMany(x => Directory.GetFiles(Path.GetDirectoryName(x), Path.GetFileName(x)))
                .Select(x => new TextInput(x)).ToList();
            IExecutor executor = new Executor(new AzureTranslator(config), new AzureClassifier(config));
            var results = executor.Execute(inputs, config);

            // XXX 仮出力
            results.ToList().ForEach(x =>
            {
                var json = JsonConvert.SerializeObject(x, Formatting.Indented);
                var path = Path.Combine(config.ResultDataDir, x.Input.Key + ".json");
                Directory.CreateDirectory(Path.GetDirectoryName(path));
                File.WriteAllText(path, json, Encoding.UTF8);

                Console.WriteLine(string.Join(",",
                    x.Input.Key,
                    string.Join(" ", x.Categories.Select(c => c.Name + ":" + c.Score))
                ));
            });
        }
    }

    // XXX ふぁいるのかずをふやすのがめんどうくさい
    class ExecuteConfig : IAzureTranslatorConfig, IAzureClassifierConfig
    {
        public string ResultDataDir { get; set; }

        public string NormalizerName { get; set; }
        public string TranslatorName { get; set; }
        public string ClassifierName { get; set; }

        //
        [JsonIgnore]
        public string AzureTranslatorSubscriptionKey { get; set; }
        [JsonIgnore]
        public string AzureClassifierSubscriptionKey { get; set; }
        //

        string IAzureTranslatorConfig.SubscriptionKey => AzureTranslatorSubscriptionKey;

        string IAzureClassifierConfig.SubscriptionKey => AzureClassifierSubscriptionKey;
    }

    interface IExecutor
    {
        // XXX メモリにあんまり抱えたくないからEnumerableにする
        ICollection<TextResult> Execute(ICollection<TextInput> inputs, ExecuteConfig config);
        TextResult Execute(TextInput input, ExecuteConfig config);
    }

    class Executor : IExecutor
    {
        public Executor(ITranslator translator, IClassifier classifier)
        {
            translators = new Dictionary<string, ITranslator>
            {
                { translator.Name, translator },
            };
            classifiers = new Dictionary<string, IClassifier>
            {
                { classifier.Name, classifier },
            };
        }

        public ICollection<TextResult> Execute(ICollection<TextInput> inputs, ExecuteConfig config)
        {
            return inputs.Select(x =>
            {
                //
                try
                {
                    return Execute(x, config);
                }
                catch (Exception ex)
                {
                    // 死ぬときは独りさ
                    // XXX ロガー
                    System.Console.WriteLine(ex);
                    return new TextResult()
                    {
                        Config = config,
                        Input = x,
                        Categories = new Category[] { },
                        HasError = true,
                    };
                }
            }).ToList();
        }

        public TextResult Execute(TextInput input, ExecuteConfig config)
        {
            var result = new TextResult()
            {
                Config = config,
                Input = input,
            };

            result.NormalizedText = GetNormalizer(config.NormalizerName).Normalize(input.RawText);
            result.TranslatedText = GetTransrator(config.TranslatorName).Translate(result.NormalizedText);
            result.Categories = GetClassifier(config.ClassifierName).Classify(result.TranslatedText);

            // XXX はじめから全般に非同期で書けばよかった
            // XXX レートリミット対応は各実装で閉じさせる＆非同期メソッドにしたいね
            Task.Delay(TimeSpan.FromSeconds(1)).Wait();

            return result;
        }

        // XXX DIするのめんどうくさい

        private INormalizer normalizer = new HtmlNormalizer();
        private INormalizer GetNormalizer(string name)
        {
            return normalizer;
        }
        private IDictionary<string, ITranslator> translators;
        private ITranslator GetTransrator(string name)
        {
            return translators[name];
        }
        private IDictionary<string, IClassifier> classifiers;
        private IClassifier GetClassifier(string name)
        {
            return classifiers[name];
        }
    }
}
