'use strict';

const mongoose = require('mongoose');
const authentication = require('./authentication');
const user = require('./user');
const quote = require('./quote');
const question = require('./question');

module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(quote);
  app.configure(question);
};
