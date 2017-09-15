'use strict';


var express = require('express');
var router = express.Router();

module.exports = function(app) {


	// Define the login route
	router.post('/login',
	  passport.authenticate('local-login', { successRedirect: '/',
	                                   failureRedirect: '/',
	                                   failureFlash: true })
	);

	// process the signup form
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/', // redirect to the homepage
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

	// =====================================
    // LOGOUT ==============================
    // =====================================
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}