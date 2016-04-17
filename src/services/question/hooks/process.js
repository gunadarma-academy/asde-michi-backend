'use strict';

// src/services/question/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  return function(hook) {
    // The authenticated user
    const user = hook.params.user;
    // The actual question text
    const text = hook.data.text
      // Questions can't be longer than 1000 characters
      .substring(0, 1000)
      // Do some basic HTML escaping
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    // Override the original data
    hook.data = {
      text,
      // Set the user id
      userId: user._id,
      // Add the current time via `getTime`
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    };
  };
};
