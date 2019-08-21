using System;
using System.Collections.Generic;
using System.Text;

namespace JapaniseTextClassifier
{
    interface IClassifier
    {
        string Name { get; }
        ICollection<Category> Classify(string text);
    }
}
