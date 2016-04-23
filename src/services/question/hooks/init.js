// question/hooks/init.js

'use strict';

const defaults = {};
const moment = require('moment');

module.exports = function (options) {
  return function (hook) {
    // The authenticated user
    const user = hook.params.user;

    // The actual question content
    // Limit characters and do some basic HTML escaping
    const title = hook.data.title
      .substring(0, 140)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const description = hook.data.description
      .substring(0, 1000)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // Override the original data
    hook.data = {
      author: user._id,
      title,
      description,
      created_at: moment().unix()
    };
  };
};
