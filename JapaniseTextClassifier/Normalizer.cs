﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace JapaniseTextClassifier
{
    public interface INormalizer
    {
        string Name { get; }
        string Normalize(string text);
    }

    public class HtmlNormalizer : INormalizer
    {
        public string Name { get { return "HtmlNormalizer"; } }

        public string Normalize(string text)
        {
            // 雑に要素っぽいものをスペースに置換するだけ
            return Regex.Replace(text, "<[^>]*>", " ");
        }
    }
}
