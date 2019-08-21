using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

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

        public double AdultScore => GetCategoryScore("Adult");
        public double RacyScore => GetCategoryScore("Racy");
        public double OffensiveScore => GetCategoryScore("Offensive");

        private double GetCategoryScore(string categoryName)
        {
            var category = Categories.FirstOrDefault(x => x.Name == categoryName);
            return category == null ? 0.0 : category.Score;
        }
    }

    //enum CategoryName
    //{
    //    Adult,
    //    Racy,
    //    Offensive,
    //}

    class Category
    {
        public string Name { get; set; }
        public double Score { get; set; }
    }
}
