# JapaniseTextClassifier

JapaniseTextClassifier classifies whether Japanese text contains sexual or unpleasant expressions.

As of August 2019, each cloud vendor's (Azure, GCP, etc) text classification SaaS is only available in English.
Therefore, JapaniseTextClassifier translates Japanese into English before classification.
You can specify which cloud vendor's SaaS is used for translation and classification.

## Input/Output

Input
```json
{
  "RawText": "このテキストは性的だとみなされて欲しいと思っている。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\n大事なことなので10回言いました。\r\n255回言ったら長すぎって言われました。\r\nこれ以降は適当に切り捨てられるパッションです。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。"
}
	
```

Output
```json
{
  "Config": {
    "NormalizerName": "HtmlNormalizer",
    "TranslatorName": "AzureTranslator",
    "ClassifierName": "AzureClassifier"
  },
  "Categories": [
    {
      "Name": "Adult",
      "Score": 0.75155091285705566
    },
    {
      "Name": "Racy",
      "Score": 0.00020591059001162648
    },
    {
      "Name": "Offensive ",
      "Score": 0.98799997568130493
    }
  ],
  "NormalizedText": "このテキストは性的だとみなされて欲しいと思っている。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\n大事なことなので10回言いました。\r\n255回言ったら長すぎって言われました。\r\nこれ以降は適当に切り捨てられるパッションです。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。\r\nSexしたい。",
  "TranslatedText": "I want this text to be considered sexual.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI said it ten times because it's important.\r\nI told them 255 times that it was too long.\r\nAfter this, it is a passion to be rounded down appropriately.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex.\r\nI want to sex. I want to sex.",
}
```

## Usage

Prepare the SaaS to be used.

- Azure Cognitive Services
  - [Translator Text](https://azure.microsoft.com/services/cognitive-services/translator-text-api/) 
  - [Content Moderator](https://azure.microsoft.com/services/cognitive-services/content-moderator/)
- Google Cloud Platform
  - [Translation API v2](https://cloud.google.com/translate/)
  - [Natural Language](https://cloud.google.com/natural-language/)

----

[Configure](https://docs.microsoft.com/aspnet/core/fundamentals/configuration/?view=aspnetcore-2.2) a `JapaniseTextClassifierConfig` section in a file or environment variable.

```json
{
  "JapaniseTextClassifierConfig": {
    "AzureTranslatorSubscriptionKey": "YOUR_API_KEY",
    "AzureClassifierSubscriptionKey": "YOUR_API_KEY",
    "GcpTranslatorApiKey": "YOUR_API_KEY"
  }
}
```

----

Place the JSON file of GCP service account key.

See: https://cloud.google.com/natural-language/docs/quickstart-client-libraries

----

[Configure DI](https://docs.microsoft.com/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2) for `IJapaniseTextClassifier`.

```csharp
public void ConfigureServices(IServiceCollection services)
{
	services.AddJapaniseTextClassifier(_config);
}
```

----

DI `IJapaniseTextClassifier` and classify.

```csharp
private IJapaniseTextClassifier _service;

public JapaniseTextClassifierFunction(IJapaniseTextClassifier classifier)
{
	_service = classifier;
}
```

### Samples

- [Console Application](../JapaniseTextClassifierConsole)
  - [Result](../JapaniseTextClassifierConsole/Sample)
- [Azure Functions](../JapaniseTextClassifierFunction)

