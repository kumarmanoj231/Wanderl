const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userControlller = require("../controllers/users.js");

router
  .route("/signup")
  .get(userControlller.renderSignupForm)
  .post(wrapAsync(userControlller.signupInAccount));

router
  .route("/login")
  .get(userControlller.loginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userControlller.loginInAccount)
  );

router.get("/logout", userControlller.logoutFromAccount);

module.exports = router;
