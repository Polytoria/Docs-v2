---
title: NetMessage
description:
icon: polytoria/NetMessage
---

# :polytoria-NetMessage: NetMessage

Represents a network message used for communication between clients and servers.

{{ notnewable() }}


## Methods

### AddString(key;string,value;string):nil { method }

Adds a string value to the message with the specified key.

---
### AddInt(key;string,value;number):nil { method }

Adds an integer value to the message with the specified key.

---
### AddBool(key;string,value;boolean):nil { method }

Adds a boolean value to the message with the specified key.

---
### AddNumber(key;string,value;number):nil { method }

Adds a number value to the message with the specified key.

---
### AddVector2(key;string,value;Vector2):nil { method }

Adds a Vector2 value to the message with the specified key.

---
### AddVector3(key;string,value;Vector3):nil { method }

Adds a Vector3 value to the message with the specified key.

---
### AddColor(key;string,value;Color):nil { method }

Adds a Color value to the message with the specified key.

---
### AddInstance(key;string,value;Instance):nil { method }

Adds an Instance value to the message with the specified key.

---
### AddBuffer(key;string,buffer;buffer):nil { method }

Adds an Buffer value to the message with the specified key.

---
### GetString(key;string):string { method }

Gets a string value from the message with the specified key.

---
### GetInt(key;string):number { method }

Gets an integer value from the message with the specified key.

---
### GetNumber(key;string):number { method }

Gets a number value from the message with the specified key.

---
### GetBool(key;string):boolean { method }

Gets a boolean value from the message with the specified key.

---
### GetVector2(key;string):Vector2 { method }

Gets a Vector2 value from the message with the specified key.

---
### GetVector3(key;string):Vector3 { method }

Gets a Vector3 value from the message with the specified key.

---
### GetColor(key;string):Color { method }

Gets a Color value from the message with the specified key.

---
### GetInstance(key;string):Instance { method }

Gets an Instance value from the message with the specified key.

---
### GetBuffer(key;string):buffer { method }

Gets an Buffer value from the message with the specified key.

---
### New():NetMessage { method }

Creates a new NetMessage instance.

