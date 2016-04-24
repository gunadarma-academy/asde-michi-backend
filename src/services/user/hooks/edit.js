'use strict';

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
    const email = hook.data.email;
    const username = hook.data.username;

    // Override the original data
    hook.data = {
      email,
      username,
      updated_at: moment().valueOf()
    };
  };
};
