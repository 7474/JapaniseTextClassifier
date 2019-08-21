using System;
using System.Collections.Generic;
using System.Text;

namespace JapaniseTextClassifier
{
    class TextResult
    {
        // XXX 気が向いたら列挙値にするよ
        public bool HasError { get; set; }

        public ExecuteConfig Config { get; set; }
        public TextInput Input { get; set; }
        public ICollection<Category> Categories { get; set; }
        public string NormalizedText { get; set; }
        public string TranslatedText { get; set; }
    }

    class Category
    {
        public string Name { get; set; }
        public double Score { get; set; }
    }
}
