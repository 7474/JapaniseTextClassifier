using Aliencube.AzureFunctions.Extensions.Configuration.AppSettings;
using Aliencube.AzureFunctions.Extensions.Configuration.AppSettings.Extensions;
using Aliencube.AzureFunctions.Extensions.OpenApi.Configurations;
using Microsoft.Extensions.Configuration;
using Microsoft.OpenApi.Models;
using System;

namespace JapaniseTextClassifierFunction
{
    public class AppSettings : AppSettingsBase
    {
        private IConfiguration configuration;

        /// <remarks>
        /// OpenApiAppSettingsBase はコンストラクタで Config を参照していたので base を呼んで済む感じではなかった。
        /// </remarks>
        public AppSettings(IConfiguration configuration)
        {
            this.configuration = configuration;

            var basePath = GetBasePath();
            var host = new ConfigurationBuilder()
                           .SetBasePath(basePath)
                           .AddJsonFile("host.json")
                           .Build();

            this.OpenApiInfo = this.Config.Get<OpenApiInfo>("OpenApi:Info");
            this.SwaggerAuthKey = this.Config.GetValue<string>("OpenApi:ApiKey");

            var version = host.GetSection("version").Value;
            this.HttpSettings = string.IsNullOrWhiteSpace(version)
                                    ? host.Get<HttpSettings>("http")
                                    : (version.Equals("2.0", StringComparison.CurrentCultureIgnoreCase)
                                           ? host.Get<HttpSettings>("extensions:http")
                                           : host.Get<HttpSettings>("http"));
        }

        protected override IConfiguration Config => configuration;


        /// <summary>
        /// Gets the <see cref="Microsoft.OpenApi.Models.OpenApiInfo"/> instance.
        /// </summary>
        public OpenApiInfo OpenApiInfo { get; }

        /// <summary>
        /// Gets the Function API key for Open API document.
        /// </summary>
        public string SwaggerAuthKey { get; }

        /// <summary>
        /// Gets the <see cref="Configurations.HttpSettings"/> instance.
        /// </summary>
        public HttpSettings HttpSettings { get; }
    }
}
