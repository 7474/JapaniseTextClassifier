# JapaniseTextClassifierFunction

For hosting [JapaniseTextClassifier](../) on [Azure Functions](https://azure.microsoft.com/ja-jp/services/functions/).

## Snipet

Execute Classify.

```
$ curl -X POST -v \
	http://localhost:7071/api/v1/classify \
	-d '{"ClassifierName": "GcpClassifier", "TranslatorName": "GcpTranslator", "Text": "ほげ　ばかー　えっちー"}'
```

Get [OpenApi Spec](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md).

```
$ curl http://localhost:7071/api/openapi/v2.json
```

## Thanks

- https://github.com/scottluskcis/azure-function-di
- https://github.com/aliencube/AzureFunctions.Extensions
