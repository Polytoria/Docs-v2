---
title: ChatService
description:
icon: polytoria/ChatService
---

# :polytoria-ChatService: ChatService

{{ inherits("Instance") }}

Chat is a static class used for various actions regarding the chat.


{{ staticclass("Chat") }}

{{ notnewable() }}


## Properties

### ChatPredicate:function { property }

A callback function that filters chat messages before they are processed by the server, and displayed to other players.
```lua
Chat.ChatPredicate = function(plr: Player, msg: string)
    if msg == "miau" then
        Chat:UnicastMessage("no miau allowed", plr)
        return false
    end
    return true
end
```

{{ clientexclusive() }}


---

## Methods

### BroadcastMessage(msg;string):nil { method }

Sends a chat message to all players.

---
### UnicastMessage(msg;string,plr;Player):nil { method }

Sends a chat message to a specific player.

---

## Events

### NewChatMessage(sender;Player,message;string) { event }

Fires when new chat message has been received from player

---
### MessageReceived(message;string) { event }

Fires when new message has been received from either `BroadcastMessage` or `UnicastMessage`

---
### MessageDeclined() { event }

Fires when message has been declined by the server

