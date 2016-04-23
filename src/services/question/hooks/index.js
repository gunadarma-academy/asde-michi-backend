'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const restrictToSender = require('./restrict-to-sender');
const init = require('./init');
const edit = require('./edit');

const populateSender = hooks.populate('sent_by', {
  service: 'users',
  field: 'author'
});

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [init()],
  update: [hooks.remove('sent_by'), restrictToSender(), edit()],
  patch: [hooks.remove('sent_by'), restrictToSender(), edit()],
  remove: [restrictToSender()]
};

exports.after = {
  all: [],
  find: [populateSender],
  get: [populateSender],
  create: [populateSender],
  update: [],
  patch: [],
  remove: []
};
