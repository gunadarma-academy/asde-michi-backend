'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const restrictToAuthor = require('./restrict-to-author');
const edit = require('./edit');

const populateAuthor = hooks.populate('sent_by', {
  service: 'users',
  field: 'author'
});

exports.before = {
  all: [
    // auth.verifyToken(),
    // auth.populateUser(),
    // auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [],
  update: [
    hooks.remove('sent_by'),
    restrictToAuthor(),
    edit()
  ],
  patch: [
    hooks.remove('sent_by'),
    restrictToAuthor(),
    edit()
  ],
  remove: [
    restrictToAuthor()
  ]
};

exports.after = {
  all: [],
  find: [populateAuthor],
  get: [populateAuthor],
  create: [populateAuthor],
  update: [],
  patch: [],
  remove: []
};
