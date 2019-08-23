using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace JapaniseTextClassifier
{
    public static class JapaniseTextClassifierExtension
    {
        public static void AddJapaniseTextClassifier(this IServiceCollection services, IConfiguration configuration)
        {
            var config = new JapaniseTextClassifierConfig();
            configuration.Bind("JapaniseTextClassifierConfig", config);
            services.AddSingleton(config);
            services.AddSingleton<IAzureTranslatorConfig>(config);
            services.AddSingleton<IAzureClassifierConfig>(config);
            services.AddSingleton<IGcpTranslatorConfig>(config);
            services.AddSingleton<IGcpClassifierConfig>(config);

            services.AddSingleton<HtmlNormalizer>();
            services.AddSingleton<AzureTranslator>();
            services.AddSingleton<AzureClassifier>();
            services.AddSingleton<GcpTranslator>();
            services.AddSingleton<GcpClassifier>();

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
                    f.GetService<GcpClassifier>(),
                };
            });
            services.AddSingleton<JapaniseTextClassifier>();
        }
    }
}
