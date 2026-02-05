---
title: ServerHidden
description:
icon: polytoria/ServerHidden
---

# :polytoria-ServerHidden: ServerHidden

{{ inherits("HiddenBase") }}

ServerHidden, similar to Hidden, is a container for objects that are meant to be hidden. Unlike Hidden, ServerHidden won't replicate its contents to clients and can only be accessed by the server.


{{ staticclass("ServerHidden") }}

{{ serverexclusive() }}

{{ notnewable() }}

