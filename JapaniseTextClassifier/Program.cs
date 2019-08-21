using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace JapaniseTextClassifier
{
    class Program
    {
        static IConfigurationRoot Configuration;
        static ServiceProvider ServiceProvider;

        static void Main(string[] args)
        {
            Startup();

            var inputs = args.SelectMany(x => Directory.GetFiles(Path.GetDirectoryName(x), Path.GetFileName(x)))
                .Select(x => new TextInput(x)).ToList();
            var executor = ServiceProvider.GetRequiredService<JapaniseTextClassifier>();
            var results = executor.Execute(inputs);

            // XXX 仮出力
            results.ToList().ForEach(x =>
            {
                var json = JsonConvert.SerializeObject(x, Formatting.Indented);
                var path = Path.Combine(x.Config.ResultDataDir, x.Input.Key + ".json");
                Directory.CreateDirectory(Path.GetDirectoryName(path));
                File.WriteAllText(path, json, Encoding.UTF8);

                Console.WriteLine(string.Join(",",
                    x.Input.Key,
                    string.Join(" ", x.Categories.Select(c => c.Name + ":" + c.Score)),
                    x.AdultScore,
                    x.RacyScore,
                    x.OffensiveScore
                ));
            });
        }

        private static void Startup()
        {
            // https://stackoverflow.com/questions/38114761/asp-net-core-configuration-for-net-core-console-application
            string environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

            Console.WriteLine("Environment: {0}", environment);


            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(AppContext.BaseDirectory))
                .AddJsonFile("appsettings.json", optional: false);
            if (environment == "Development")
            {
                builder.AddJsonFile(
                        Path.Combine(AppContext.BaseDirectory, string.Format("..{0}..{0}..{0}", Path.DirectorySeparatorChar), $"appsettings.{environment}.json"),
                        optional: true
                    );
            }
            else if (!string.IsNullOrEmpty(environment))
            {
                builder.AddJsonFile($"appsettings.{environment}.json", optional: true);
            }
            builder.AddEnvironmentVariables();
            Configuration = builder.Build();

            var services = new ServiceCollection();
            services.AddLogging(configure =>
            {
                configure.AddConsole().AddDebug();
            });
            // 実行中に変化はしないのでOptionsは構成しない
            var executeConfig = new ExecuteConfig();
            Configuration.Bind("ExecuteConfig", executeConfig);
            services.AddSingleton(executeConfig);
            services.AddSingleton<IAzureTranslatorConfig>(executeConfig);
            services.AddSingleton<IAzureClassifierConfig>(executeConfig);

            services.AddSingleton<HtmlNormalizer>();
            services.AddSingleton<AzureTranslator>();
            services.AddSingleton<AzureClassifier>();

            services.AddSingleton<ICollection<ITranslator>>(f =>
            {
                return new List<ITranslator>()
                {
                    f.GetService<AzureTranslator>(),
                };
            });
            services.AddSingleton<ICollection<IClassifier>>(f =>
            {
                return new List<IClassifier>()
                {
                    f.GetService<AzureClassifier>(),
                };
            });
            services.AddSingleton<JapaniseTextClassifier>();

            ServiceProvider = services.BuildServiceProvider();
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

    interface IJapaniseTextClassifier
    {
        IEnumerable<TextResult> Execute(IEnumerable<TextInput> inputs);
        TextResult Execute(TextInput input);
    }

    class JapaniseTextClassifier : IJapaniseTextClassifier
    {
        private ExecuteConfig config;
        public JapaniseTextClassifier(
            ICollection<ITranslator> translators,
            ICollection<IClassifier> classifiers,
            ExecuteConfig executeConfig)
        {
            translatorDic = translators.ToDictionary(x => x.Name);
            classifierDic = classifiers.ToDictionary(x => x.Name);
            config = executeConfig;
        }

        public IEnumerable<TextResult> Execute(IEnumerable<TextInput> inputs)
        {
            return inputs.Select(x =>
            {
                //
                try
                {
                    return Execute(x);
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
            });
        }

        public TextResult Execute(TextInput input)
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
        private IDictionary<string, ITranslator> translatorDic;
        private ITranslator GetTransrator(string name)
        {
            return translatorDic[name];
        }
        private IDictionary<string, IClassifier> classifierDic;
        private IClassifier GetClassifier(string name)
        {
            return classifierDic[name];
        }
    }
}
