using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace JapaniseTextClassifier
{
    public class TextInput
    {
        public string Key { get; set; }
        public string RawText { get; set; }

        public TextInput(string filePath)
            : this(new FileInfo(filePath))
        {
        }

        public TextInput(string filePath, Encoding encoding)
            : this(new FileInfo(filePath), encoding)
        {
        }

        public TextInput(FileInfo file)
            : this(file, Encoding.UTF8)
        {
        }

        public TextInput(FileInfo file, Encoding encoding)
        {
            Key = file.Name;
            RawText = File.ReadAllText(file.FullName, encoding);
        }
    }
}
