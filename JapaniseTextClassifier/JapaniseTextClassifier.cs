using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JapaniseTextClassifier
{
    public interface IJapaniseTextClassifierExecuteConfig
    {
        string ResultDataDir { get; }

        string NormalizerName { get; }
        string TranslatorName { get; }
        string ClassifierName { get; }
    }

    public interface IJapaniseTextClassifier
    {
        IEnumerable<TextResult> ExecuteBulk(IEnumerable<TextInput> inputs, IJapaniseTextClassifierExecuteConfig config);
        TextResult Execute(TextInput input, IJapaniseTextClassifierExecuteConfig config);
    }

    public class JapaniseTextClassifier : IJapaniseTextClassifier
    {
        public JapaniseTextClassifier(
            ICollection<ITranslator> translators,
            ICollection<IClassifier> classifiers)
        {
            translatorDic = translators.ToDictionary(x => x.Name);
            classifierDic = classifiers.ToDictionary(x => x.Name);
        }

        public IEnumerable<TextResult> ExecuteBulk(IEnumerable<TextInput> inputs, IJapaniseTextClassifierExecuteConfig config)
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
            });
        }

        public TextResult Execute(TextInput input, IJapaniseTextClassifierExecuteConfig config)
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
