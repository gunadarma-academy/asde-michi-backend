'use strict';

const authentication = require('./authentication');
const user = require('./user');
const quote = require('./quote');
const question = require('./question');

module.exports = function() {
  const app = this;

  app.configure(authentication);
  app.configure(user);
  app.configure(quote);
  app.configure(question);
};
