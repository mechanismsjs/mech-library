(function() {
"use strict";

var root = this; // Establish root object 'window' (browser) or 'exports' (server)
if (typeof root.m === 'undefined') { root.m = {}; } // Save the previous library
var m = root.m;
var previous = m.library;
m.library = previous || {}; // New library OR to use existing library (m for example), please fork and add to that project.
m.library["version"] = '{{VERSION}}'; // Version auto updated by gulpfile.js build process

// Export module for Node and the browser.
if(typeof module !== 'undefined' && module.exports) {
  module.exports = m;
} else {
  root.m = m;
}
