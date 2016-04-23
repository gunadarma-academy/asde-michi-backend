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

    const username = hook.data.username
      .substring(0, 100)
    const email = hook.data.email
      .substring(0, 100)
    const avatar = hook.data.avatar

    // Override the original data
    hook.data = {
      username,
      email,
      avatar,
      created_at: moment().unix()
    };
  };
};
