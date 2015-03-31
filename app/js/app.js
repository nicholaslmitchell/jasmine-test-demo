'use strict';

(function(window) {

	var Cactus = function() {

		var cactus = {};

		var _attributes = {};

		var _typeMatch = function(arr, val) {
			return arr.indexOf(val) !== -1;
		};

		cactus.setName = function(name) {
			_attributes.name = name;
		};

		cactus.getName = function() {
			return _attributes.name;
		};

		cactus.getType = function() {
			return _attributes.type || 'prickly';
		};

		cactus.setType = function(type) {
			var types = ['short', 'tall', 'prickly'];
			var typeMatch = _typeMatch(types, type);

			if (typeMatch) {
				_attributes.type = type;
			} else {
				throw 'Invalid cactus type: ' + '"' + type + '"'; 
			}

		};

		return cactus;
	};

	window.Cactus = Cactus;

})(window);