'use strict';

// src/services/user/hooks/init.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};
const moment = require('moment');

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    hook.init = true;
  };
};

module.exports = function (options) {
  return function (hook) {
    // The authenticated user
    const user = hook.params.user;
    const email = hook.params.user.email
      .substring(0, 100);
    const username = hook.params.user.username
      .substring(0, 100);

    // Override the original data
    hook.data = {
      author: user._id,
      email: user.email,
      username: user.username,
      created_at: moment().unix()
    };
  };
};
