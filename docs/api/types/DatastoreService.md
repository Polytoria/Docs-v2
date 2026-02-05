---
title: DatastoreService
description:
icon: polytoria/DatastoreService
---

# :polytoria-DatastoreService: DatastoreService

{{ inherits("Instance") }}

Datastore (not to be confused with the Datastore data type) is a service used for storing data between place sessions.


{{ staticclass("Datastore") }}

{{ serverexclusive() }}

{{ notnewable() }}


## Methods

### GetDatastore(key;string):Datastore { method }

Attempts to get a Datastore object from the Datastore service.

