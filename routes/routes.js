'use strict';


var express = require('express');
var router = express.Router();

module.exports = function(app) {


	// Define the home page route
	router.get('/', function(req, res) {
	  res.send('home page');
	});
};
