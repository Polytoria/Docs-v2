---
title: HttpRequestData
description:
icon: polytoria/Unknown
---

# HttpRequestData

HttpRequestData represents the data required to construct an HTTP request

{{ serverexclusive() }}

{{ notnewable() }}


## Properties

### URL:string { property }

The target endpoint of the HTTP request.

---
### Method:HttpRequestMethodEnum { property }

The HTTP method used for the request.

---
### Body:string { property }

The payload sent with the request.

---
### Headers:table { property }

A table of HTTP headers to include with the request, represented as key-value pairs.

---

## Methods

### New():HttpRequestData { method }

Creates and returns a new instance of `HttpRequestData`

