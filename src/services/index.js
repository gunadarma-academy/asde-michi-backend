'use strict';

const authentication = require('./authentication');
const user = require('./user');
const question = require('./question');
const message = require('./message');
const quote = require('./quote');

module.exports = function() {
  const app = this;

  app.configure(authentication);
  app.configure(user);
  app.configure(question);
  app.configure(message);
  app.configure(quote);
};
