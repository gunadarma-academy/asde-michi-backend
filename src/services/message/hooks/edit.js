// message/hooks/edit.js
'use strict';

const defaults = {};

module.exports = function (options) {
  return function (hook) {
    // The authenticated user
    const user = hook.params.user;

    // The actual message content
    // Limit characters and do some basic HTML escaping
    const text = hook.data.text
      .substring(0, 400)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // Override the original data
    hook.data = {
      text,
      updated_at: new Date().getTime()
    };
  };
};
