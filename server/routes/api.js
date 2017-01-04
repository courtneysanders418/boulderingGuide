var express = require('express');
var router = express.Router();
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/signup',
    passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

router.post('/login',
    passport.authenticate('local'),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.redirect('/users/' + req.user.username);
    });

module.exports = router;

'use strict';

module.exports = function(app) {
    // Root routing
    var core = require('client/js/controllers/contact.js');

    app.route('/contact').post(core.sendMail);
};

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

/**
 * Send an email when the contact from is submitted
 */
exports.sendMail = function(req, res) {

    var data = req.body;

    transporter.sendMail({
        from: data.contactEmail,
        to: 'cswoods88@gmail.com.com',
        subject: 'Message from ' + data.contactName,
        text: data.contactMsg
    });

    res.json(data);
};
