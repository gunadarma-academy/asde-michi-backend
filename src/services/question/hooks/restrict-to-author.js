'use strict';

const defaults = {};
const errors = require('feathers-errors');

module.exports = function (options) {
  return function (hook) {
    const questionService = hook.app.service('questions');

    // First get the question that the user wants to access
    return questionService.get(hook.id, hook.params).then(question => {
      // Throw a not authenticated error if the question and user id don't match
      if (question.sent_by._id !== hook.params.user._id) {
        throw new errors.NotAuthenticated('Access not allowed');
      }
      // Otherwise just return the hook
      return hook;
    });
  };
};
