const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');
const userController = require('../controllers/users.js');

//Signup Route
router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signUp));

//Login Route
router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), wrapAsync(userController.logIn));

router.get("/logout", userController.logOut);

module.exports = router;