---
title: NetworkEvent
description:
icon: polytoria/NetworkEvent
---

# :polytoria-NetworkEvent: NetworkEvent

{{ inherits("Instance") }}

NetworkEvents are events that can be called to communicate between server and client. NetMessages are the class used for sharing data between server and client when sending NetworkEvents.


## Properties

### Reliable:boolean { property }

Determines if this network event should send messages reliably. Recommended to be off if you're passing lot of data that doesn't need to arrive reliably.

---

## Methods

### InvokeServer(msg;NetMessage?,_;any?):nil { method }

Sends a message to the server.

{{ clientexclusive() }}

---
### InvokeClient(msg;NetMessage?,player;Player?):nil { method }

Sends a message to a specific client.

{{ serverexclusive() }}

---
### InvokeClients(msg;NetMessage?):nil { method }

Sends a message to all connected clients.

{{ serverexclusive() }}

---

## Events

### InvokedServer(sender;Player,msg;NetMessage) { event }

Fires when server receives message from client

{{ serverexclusive() }}

---
### InvokedClient(msg;NetMessage) { event }

Fires when client receives message from server

{{ clientexclusive() }}

