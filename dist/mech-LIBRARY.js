// mech-library.js
// version: 0.1.1
// author: YOUR INFORMATION
// license: MIT
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
m.library["version"] = '0.1.1';

// Export module for Node and the browser.
if(typeof module !== 'undefined' && module.exports) {
  module.exports = m;
} else {
  root.m = m;
}

function mechanism01(data01, data02) {
   var f = Object.create(Mechanism01.prototype);
   f.data01 = data01;
   f.data02 = data02;
   return f;
};
function Mechanism01() {};
Mechanism01.prototype = Object.create ( Object.prototype, {
   data01: { enumerable: false,
      get: function() { return this._data01; },
      set: function(d) {
         if ((null === d) || (undefined === d)) {
            throw ("data01 and data02 of mechanism01 must be defined or a non-null value.")
         } else {
            this._data01 = d;
         }
      }
   },
   data02: { enumerable: false,
      get: function() { return this._data02; },
      set: function(d) {
         if ((null === d) || (undefined === d)) {
            throw ("data01 and data02 of mechanism02 must be defined or a non-null value.")
         } else {
            this._data02 = d;
         }
      }
   },
   
   go: { enumerable: false,
      get: function() {
         // REQUIRED:
         // your mechanism core behavior here
         return "";
      }
   },
   goNum: { enumerable: false,
      get: function() {
         // OPTIONAL:
         // your mechanism core behavior ran as a number
         return 0;
      }
   },
   goStr: { enumerable: false,
      get: function() {
         // OPTIONAL:
         // your mechanism core behavior ran as a string
         return 0;
      }
   },
   goBool: { enumerable: false,
      get: function() {
         // OPTIONAL:
         // your mechanism core behavior ran as a boolean
         return 0;
      }
   },
   goArr: { enumerable: false,
      get: function() {
         // OPTIONAL:
         // your mechanism core behavior ran as an array
         return 0;
      }
   }
});
Mechanism01.prototype.isMech = true;
Mechanism01.prototype.isNull = false;
Mechanism01.prototype.isPrim = false;
m.library.mechanism01 = mechanism01;
m.library.Mechanism01 = Mechanism01;
function mechanism02(data01, data02) {
   var f = Object.create(Mechanism02.prototype);
   f.data01 = data01;
   f.data02 = data02;
   return f;
};
function Mechanism02() {};
Mechanism02.prototype = Object.create ( Object.prototype, {
   data01: { enumerable: false,
      get: function() { return this._data01; },
      set: function(d) {
         if ((null === d) || (undefined === d)) {
            throw ("data01 and data02 of mechanism02 must be defined or a non-null value.")
         } else {
            this._data01 = d;
         }
      }
   },
   data02: { enumerable: false,
      get: function() { return this._data02; },
      set: function(d) {
         if ((null === d) || (undefined === d)) {
            throw ("data01 and data02 of mechanism02 must be defined or a non-null value.")
         } else {
            this._data02 = d;
         }
      }
   },
   
   go: { enumerable: false,
      get: function() {
         // REQUIRED:
         // your mechanism core behavior here
         return "";
      }
   },
   goNum: { enumerable: false,
      get: function() {
         // OPTIONAL:
         // your mechanism core behavior ran as a number
         return 0;
      }
   },
   goStr: { enumerable: false,
      get: function() {
         // OPTIONAL:
         // your mechanism core behavior ran as a string
         return 0;
      }
   },
   goBool: { enumerable: false,
      get: function() {
         // OPTIONAL:
         // your mechanism core behavior ran as a boolean
         return 0;
      }
   },
   goArr: { enumerable: false,
      get: function() {
         // OPTIONAL:
         // your mechanism core behavior ran as an array
         return 0;
      }
   }
});
Mechanism02.prototype.isMech = true;
Mechanism02.prototype.isNull = false;
Mechanism02.prototype.isPrim = false;
m.library.mechanism02 = mechanism02;
m.library.Mechanism02 = Mechanism02;

}.call(this));