using System;
using System.Collections.Generic;
using System.Text;

namespace JapaniseTextClassifier
{
    interface ITranslator
    {
        string Name { get; }
        string Translate(string text);
    }
}
