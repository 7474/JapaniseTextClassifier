using System;
using System.Collections.Generic;
using Aliencube.AzureFunctions.Extensions.OpenApi;
using Aliencube.AzureFunctions.Extensions.OpenApi.Abstractions;
using Aliencube.AzureFunctions.Extensions.OpenApi.Configurations;
using JapaniseTextClassifier;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: FunctionsStartup(typeof(JapaniseTextClassifierFunction.Startup))]
namespace JapaniseTextClassifierFunction
{
    public class Startup : FunctionsStartup
    {
        // 設定を構成するためのワークアラウンド
        // Ref:
        // - https://github.com/Azure/azure-functions-host/issues/4464
        // - https://github.com/scottluskcis/azure-function-di/blob/master/src/FunctionApp1/Startup.cs
        public override void Configure(IFunctionsHostBuilder builder)
        {
            Console.WriteLine("CurrentDirectory: " + Environment.CurrentDirectory);
            // update configuration using extension method, in future when more support
            // added for this extension method can go away entirely 
            // create a Func that will receive an IConfigurationBuilder as input and expects
            // IConfiguration as output by calling .Build() on the IConfigurationBuilder
            builder.AddConfiguration((configBuilder) =>
            {
                // these could come from other sources than environment variables, keeping simple for now
                var envName = Environment.GetEnvironmentVariable("ENVIRONMENT_NAME") ?? "Production";

                // use IConfigurationBuilder like you typically would
                var configuration = configBuilder
                    .AddJsonFile("appsettings.json")
                    .AddJsonFile($"appsettings.{envName}.json", true, true)
                    .TryAddAzureKeyVault(Environment.GetEnvironmentVariable("VAULT_NAME"))
                    .AddEnvironmentVariables()
                    .Build();

                return configuration;
            });

            // set the IConfiguration, in future maybe this will be set in constructor like ASP.NET Core is
            // be sure to call this after AddConfiguration has been called
            Configuration = builder.GetCurrentConfiguration();

            // explicitly call ConfigureServices to setup DI 
            ConfigureServices(builder.Services);
        }

        public IConfiguration Configuration { get; private set; }

        public void ConfigureServices(IServiceCollection services)
        {
            //
            services.AddSingleton<AppSettings>();
            services.AddSingleton<RouteConstraintFilter, RouteConstraintFilter>();

            services.AddTransient<IDocumentHelper, DocumentHelper>();
            services.AddTransient<IDocument, Document>();
            services.AddTransient<ISwaggerUI, SwaggerUI>();

            //services.AddTransient<ISampleHttpFunction, SampleHttpFunction>();
            //services.AddTransient<ISampleTimerFunction, SampleTimerFunction>();
            //services.AddTransient<IRenderOpeApiDocumentFunction, RenderOpeApiDocumentFunction>();
            //services.AddTransient<IRenderSwaggerUIFunction, RenderSwaggerUIFunction>();

            // XXX  Cloud Natural Language API のSDKとAzure Functionsのランタイムとで依存関係の競合が発生しているので全構成はできない状態
            // Ref. https://www.oipapio.com/question-4684771
            //services.AddJapaniseTextClassifier(Configuration);

            var config = new JapaniseTextClassifierConfig();
            Configuration.Bind("JapaniseTextClassifierConfig", config);
            services.AddSingleton(config);
            services.AddSingleton<IJapaniseTextClassifierExecuteConfig>(config);
            services.AddSingleton<IAzureTranslatorConfig>(config);
            services.AddSingleton<IAzureClassifierConfig>(config);
            services.AddSingleton<IGcpTranslatorConfig>(config);
            services.AddSingleton<IGcpClassifierConfig>(config);

            services.AddSingleton<HtmlNormalizer>();
            services.AddSingleton<AzureTranslator>();
            services.AddSingleton<AzureClassifier>();
            services.AddSingleton<GcpTranslator>();
            //services.AddSingleton<GcpClassifier>();

            services.AddSingleton<ICollection<ITranslator>>(f =>
            {
                return new List<ITranslator>()
                {
                    f.GetService<AzureTranslator>(),
                    f.GetService<GcpTranslator>(),
                };
            });
            services.AddSingleton<ICollection<IClassifier>>(f =>
            {
                return new List<IClassifier>()
                {
                    f.GetService<AzureClassifier>(),
                    //f.GetService<GcpClassifier>(),
                };
            });
            services.AddSingleton<IJapaniseTextClassifier, JapaniseTextClassifier.JapaniseTextClassifier>();
        }
    }
}
