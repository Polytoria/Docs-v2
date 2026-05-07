---
title: Client/Server
weight: 2
---

# Launching the Client and Server

This guide walks you through how to run the Polytoria Client and Server locally for development. In this guide specifically, we will be launching one server instance and one client instance, but you can launch as many clients as you want!

1. Go to Debug > Customize Run Instances

![Debug > Customize Run Instances](image.png){ width="600" }

2. Enable Multiple Instances, then set the instance count to 2

![Enable Multiple Instances](image-1.png){ width="600" }

3. Set the launch arguments to the following

![Launch arguments](image-2.png)

Instance 1:
```
-network server -world res://samples/worlds/baseplate.poly
```

Instance 2:
```
-network client -id 64499
```

!!! tip "About the ID"
    The ID refers to the user ID of the account you want to playtest with. You can find your user ID by going to [settings](https://polytoria.com/my/settings), scrolling down to the bottom until you see "Player ID".

!!! failure "About Feature tags"
    Make sure the feature tags does not contain other entry flags (or just keep it empty!), we don't need them in client launching.

4. Press Run Project

![Run Project](image-3.png){ width="300" }

...and there you go!

![Final result](image-4.png)