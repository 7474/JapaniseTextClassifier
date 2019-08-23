using JapaniseTextClassifier;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Linq;
using System.Text;

namespace JapaniseTextClassifierConsole
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
            var executor = ServiceProvider.GetRequiredService<IJapaniseTextClassifier>();
            var config = ServiceProvider.GetRequiredService<IJapaniseTextClassifierExecuteConfig>();
            var results = executor.ExecuteBulk(inputs, config);

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
            var configuration = Configuration;

            // 実行中に設定変化はしないのでOptionsは構成しない
            var services = new ServiceCollection();
            services.AddLogging(configure =>
            {
                configure.AddConsole().AddDebug();
            });
            services.AddJapaniseTextClassifier(configuration);

            ServiceProvider = services.BuildServiceProvider();
        }
    }
}
