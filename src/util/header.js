(function() {
"use strict";
   
// Establish the root object:
//   'window' in the browser
//   'exports' on the server
var root = this;

// Save the previous library
if (typeof root.m === 'undefined') {
   root.m = {};
}
var m = root.m;

var previous = m.library;

// New module or use existing
// NOTE: If you want to add the
// mechanism directly to another
// library, please fork that libary.
m.library = previous || {};

// Current version updated by
// gulpfile.js build process
m.library["version"] = '{{VERSION}}';

// Export module for Node and the browser.
if(typeof module !== 'undefined' && module.exports) {
  module.exports = m;
} else {
  root.m = m;
}
