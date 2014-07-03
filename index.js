/* global require, __dirname */
(function() {
	'use strict';
	var ghost = require('ghost'),
		path = require('path');

	ghost({
		config: path.join(__dirname, 'config.js')
	});
})();