'use strict';

module.exports = function (app) {
  return function (req, res, next) {
    const body = req.body;

    // Get the user service and `create` a new user
    app.service('users').create({
        username: body.username,
        email: body.email,
        password: body.password
      })
      // Then redirect to the login page if necessary
      // .then(user => res.redirect('/signin'))
      // On errors, just call our error middleware
      .catch(next);
  };
};
