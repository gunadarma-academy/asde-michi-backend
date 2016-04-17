'use strict';

// src/services/question/hooks/restrict-to-sender.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};
const errors = require('feathers-errors');

module.exports = function (options) {
  return function (hook) {
    const questionService = hook.app.service('questions');

    // First get the message that the user wants to access
    return questionService.get(hook.id, hook.params).then(question => {
      // Throw a not authenticated error if the message and user id don't match
      if (question.sentBy._id !== hook.params.user._id) {
        throw new errors.NotAuthenticated('Access not allowed');
      }

      // Otherwise just return the hook
      return hook;
    });
  };
};
