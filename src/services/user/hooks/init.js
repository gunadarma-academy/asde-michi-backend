'use strict';

const defaults = {};
const moment = require('moment');

module.exports = function () {
  return function (hook) {
    // Assign the new data with the Gravatar image
    hook.data = Object.assign({}, hook.data, {
      created_at: moment().unix()
    });
  };
};
