# JapaniseTextClassifierFunction

For hosting [JapaniseTextClassifier](../) on [Azure Functions](https://azure.microsoft.com/ja-jp/services/functions/).

## Snipet

```
$ curl -X POST -v \
	http://localhost:7071/api/v1/classify \
	-d '{"ClassifierName": "GcpClassifier", "TranslatorName": "GcpTranslator", "Text": "ほげ　ばかー　えっちー"}'
```

## Thanks

- https://github.com/scottluskcis/azure-function-di
