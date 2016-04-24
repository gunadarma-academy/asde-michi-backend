'use strict';

const defaults = {};

module.exports = function (options) {
  options = Object.assign({}, defaults, options);
  return function (hook) {
    hook.setAuthor = true;
  };
};

module.exports = function (options) {
  return function (hook) {
    const user = hook.params.user;
    // const question = hook.data;

    hook.data = {
      author: user
    };
  };
};


exports.addUpdatedAt = function(options) {
  options = Object.assign({}, defaults, options);
  // Override selected data
  return function(hook) {
    hook.addUpdatedAt = true;
  };
};
