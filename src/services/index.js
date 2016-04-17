'use strict';

const authentication = require('./authentication');
const user = require('./user');
const message = require('./message');
const question = require('./question');

module.exports = function() {
  const app = this;

  app.configure(authentication);
  app.configure(user);
  app.configure(message);
  app.configure(question);
};
