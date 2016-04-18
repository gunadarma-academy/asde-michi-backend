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

    // The actual question content
    // Limit characters and do some basic HTML escaping
    const title = hook.data.text
      .substring(0, 140)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const description = hook.data.description
      .substring(0, 1000)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    // Override the original data
    hook.data = {
      title,
      description,
      author: user._id,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    };
  };
};
