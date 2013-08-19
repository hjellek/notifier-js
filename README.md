notifier-js
===========

Small wrapper for [humane-js](https://github.com/wavded/humane-js) to make it more convenient to use.

Released under the MIT license

Examples
--------
```
var options = {
    clickToHide: false,
    timeout: 1000
};
Notifier.success("Success!", options);
Notifier.info("Information!", options);
Notifier.error("Error!", options);
Notifier.warning("Warning!", options);
```
