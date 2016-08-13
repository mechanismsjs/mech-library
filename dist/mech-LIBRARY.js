// mech-library.js
// version: 0.2.1
// author: YOUR INFORMATION
// license: MIT
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
m.library._["version-library"] = '0.2.1'; // version set through gulp build

// export module for node or the browser
if (typeof module !== 'undefined' && module.exports) {
	module.exports = m;
} else {
	root.m = m;
}
function mechanism01(data01) {
	var f = Object.create(Mechanism01.prototype);
	f.data01 = data01;
	if (f.data01 && f.data01.isMech) {
		f.data01._parDir = f;
	}
	return f;
}

function Mechanism01() {}
Mechanism01.prototype = Object.create(Object.prototype, {
	isMech: {
		get: function() {
			return true;
		}
	},
	data01: {
		enumerable: false,
		get: function() {
			return this._data01;
		},
		set: function(d) {
			if ((null === d) || (undefined === d)) {
				throw ("data01 and data02 of mechanism01 must be defined or a non-null value.");
			} else {
				this._data01 = d;
			}
		}
	},
	go: {
		enumerable: false,
		get: function() {
			// REQUIRED:
			// your mechanism core behavior here
			return "";
		}
	},
	goNum: {
		enumerable: false,
		get: function() {
			// OPTIONAL:
			// your mechanism core behavior ran as a number
			return 0;
		}
	},
	goStr: {
		enumerable: false,
		get: function() {
			// OPTIONAL:
			// your mechanism core behavior ran as a string
			return 0;
		}
	},
	goBool: {
		enumerable: false,
		get: function() {
			// OPTIONAL:
			// your mechanism core behavior ran as a boolean
			return 0;
		}
	},
	goArr: {
		enumerable: false,
		get: function() {
			// OPTIONAL:
			// your mechanism core behavior ran as an array
			return 0;
		}
	}
});
m.library.mechanism01 = mechanism01;
m.library._.Mechanism01 = Mechanism01;

}.call(this));