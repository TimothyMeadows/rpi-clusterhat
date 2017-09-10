var ClusterHat = require('../clusterhat'), clusterhat = new ClusterHat();
clusterhat.on(clusterhat.all);

// wait 30 seconds, then turn them all off.
setTimeout(function() {
    clusterhat.off(clusterhat.all);
}, 30000);