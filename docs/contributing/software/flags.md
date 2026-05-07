---
title: Feature Flags
weight: 5
---

# Feature Flags

This page lists the feature flags that can be used in the Polytoria software.

|Flag|Description|
|--|--|
|`client`|Launch the Client.|
|`creator`|Launch the Creator.|
|`mobile-ui`|Launch the Mobile UI.|
|`renderer`|Launch the Renderer.|
|`offline`|Enable offline mode, this will disable critical online requests and replace them with placeholder data, use when Polytoria Web services is offline.|
|`beta`|Mark this build as beta build, this will show more in-detail errors.|
|`server`|Mark this build as server build.|
|`mobile`|Mark this build as mobile build, use alongside `mobile-ui`.|
|`netlog`|Enable Network synchronizers Logging.|
|`rpclog`|Enable RPC Logging.|
|`nettrace`|Determine network stack trace logging in network errors, useful if you want to see where RPC was called from in the origin.|
|`nohttp`|Disable all HTTP requests from the software.|
|`debug-face`|Draw the arrow to show where the part's forward is.|
|`serverpov`|Show server's POV in creator.|
|`executor`|Enable developer script executor, can be used to test exploits.|
|`lowfps`|Limit the FPS to 15.|
|`potatofps`|Limit the FPS even more to 2.|

