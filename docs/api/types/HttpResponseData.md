---
title: HttpResponseData
description:
icon: polytoria/Unknown
---

# HttpResponseData

HttpResponseData represents the result of an HTTP request.

{{ serverexclusive() }}

{{ notnewable() }}


## Properties

### Success:boolean { property }

Indicates whether the HTTP request completed successfully.
{{ readonly() }}


---
### StatusCode:number { property }

The HTTP status code returned by the server.
{{ readonly() }}


---
### Headers:table { property }

A table containing the HTTP response headers returned by the server, represented as key-value pairs.
{{ readonly() }}


---
### Body:string { property }

The response payload returned by the server as a string.
{{ readonly() }}


---
### Buffer:buffer { property }

The response payload returned by the server as a buffer.
{{ readonly() }}


