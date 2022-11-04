$content = (Invoke-WebRequest https://localhost:7099/swagger/v1/swagger.json).ParsedHtml.body.innerHTML
[IO.File]::WriteAllLines("ng-openapi-gen-tracerco-api.json", $content)
