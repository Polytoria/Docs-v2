---
title: PTSignal
description:
icon: polytoria/Unknown
---

# PTSignal

A signal which scripts can subscribe to

{{ notnewable() }}


## Methods

### Connect(action;function):nil { method }

Connect a function to this signal

---
### Disconnect(action;function):nil { method }

Disconnect a function from this signal

---
### Wait():any { method }

Wait until this signal's emitted

---
### Once(action;function):nil { method }

Listen to this signal only once

