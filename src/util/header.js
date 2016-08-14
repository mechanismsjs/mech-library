(function() {
"use strict";

var root = this; // window (browser) or exports (server)
var m = root.m || {
  library: {
    _: {}
  }
}; // merge with previous or new module
m.library = m.library || {
  library: {
    _: {}
  }
}; // merge with pervious or new sub-module
m.library._ = m.library._ || {
  _: {}
}; // merge with pervious or new sub-module
m.library._["version-{{NAMESUB}}"] = '{{VERSION}}'; // version set through gulp build

// export module for node or the browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = m;
} else {
  root.m = m;
}
