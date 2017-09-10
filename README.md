# rpi-clusterhat for node.js

This library was desgined for usage with the [clusterhat](https://clusterhat.com/). It is a reflection of clusterhat.sh provided by the vendor but in pure node.js directly using gpio pins. This library is not affiliated in anyway with the vendor of the clusterhat.

# properties
* p1 - Represents PI 1 as a string "p1".
* p2 - Represents PI 2 as a string "p2".
* p3 - Represents PI 3 as a string "p3".
* p4 - Represents PI 4 as a string "p4".
* [all](#all) - Represents all pi's as a string "all".

# methods
* [on](#on) - Turn on a pi zero.
* [off](#off) - Turn off a pi zero.

<a name="on"></a>
# on
This method will turn on a pi zero.

Note: There is a 2000 (2 second) delay between turning pi's on. This is to prevent an excessive spike of power when to many pi's are turned on at once. This time was taken from clusterhat.sh.

```javascript
var ClusterHat = require('clusterhat'), clusterhat = new ClusterHat();

clusterhat.on(clusterhat.p1);
```

<a name="off"></a>
# off
This method will turn off a pi zero.

Note: There is no delay when turning off pi's.

```javascript
var ClusterHat = require('clusterhat'), clusterhat = new ClusterHat();

clusterhat.off(clusterhat.p1);
```

<a name="all"></a>
# all
This is not a method but an example of using the all property rather than specifying 1 pi zero at a time.

Note: There is a 2000 (2 second) delay between turning all pi's on. There is however no delay when turning all pi's off.

```javascript
var ClusterHat = require('clusterhat'), clusterhat = new ClusterHat();

clusterhat.on(clusterhat.all);
```

```javascript
var ClusterHat = require('clusterhat'), clusterhat = new ClusterHat();

clusterhat.off(clusterhat.all);
```
