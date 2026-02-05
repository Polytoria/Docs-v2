---
title: HttpService
description:
icon: polytoria/HttpService
---

# :polytoria-HttpService: HttpService

{{ inherits("Instance") }}

Http is a service used for HTTP communications and requests.


{{ staticclass("Http") }}

{{ serverexclusive() }}

{{ notnewable() }}


## Methods

### RequestAsync(data;HttpRequestData):HttpResponseData { method }

Send a request using the `HttpRequestData`

---
### GetAsync(url;string,headers;table?):string { method }

Sends a GET request to the specified URL.

---
### PostAsync(url;string,body;string,headers;table?):string { method }

Sends a POST request to the specified URL.

---
### PutAsync(url;string,body;string,headers;table?):string { method }

Sends a PUT request to the specified URL.

---
### DeleteAsync(url;string,body;string,headers;table?):string { method }

Sends a DELETE request to the specified url.

---
### PatchAsync(url;string,body;string,headers;table?):string { method }

Sends a PATCH request to the specified url.

---
### GetBufferAsync(url;string,headers;table?):buffer { method }

Sends a GET request to the specified url, and return the response as buffer.

---
### PostBufferAsync(url;string,body;string,headers;table?):buffer { method }

Sends a POST request to the specified url, and return the response as buffer.

---
### PutBufferAsync(url;string,body;string,headers;table?):buffer { method }

Sends a PUT request to the specified url, and return the response as buffer.

---
### DeleteBufferAsync(url;string,body;string,headers;table?):buffer { method }

Sends a DELETE request to the specified url, and return the response as buffer.

---
### PatchBufferAsync(url;string,body;string,headers;table?):buffer { method }

Sends a PATCH request to the specified url, and return the response as buffer.

