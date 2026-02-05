---
title: Datastore
description:
icon: polytoria/Datastore
---

# :polytoria-Datastore: Datastore

Datastore is an object that represent datastore connection.

{{ serverexclusive() }}

{{ notnewable() }}


## Properties

### Key:string { property }

The key identifying this Datastore connection.
{{ readonly() }}


---

## Methods

### GetAsync(key;string):any { method }

Retrieves a value from the datastore asynchronously using the specified key.

---
### SetAsync(key;string,value;any):nil { method }

Stores a value in the datastore asynchronously using the specified key.

---
### RemoveAsync(key;string):nil { method }

Removes a value from the datastore asynchronously using the specified key.

---
### Disconnect():nil { method }

Disconnect this datastore connection, this should be called when you finish using the datastore.

