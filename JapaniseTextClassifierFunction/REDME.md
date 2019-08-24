# JapaniseTextClassifierFunction

JapaniseTextClassifier を [Azure Functions](https://azure.microsoft.com/ja-jp/services/functions/) でホスティングする。


## Snipet

```
$ curl -X POST -v \
	http://localhost:7071/api/JapaniseTextClassifierFunction \
	-d '{"ClassifierName": "GcpClassifier", "TranslatorName": "GcpTranslator", "Text": "ほげ　ばかー　えっちー"}'
```

## Thanks

- https://github.com/scottluskcis/azure-function-di
