'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const gravatar = require('./gravatar');
const init = require('./init');
const edit = require('./edit');

exports.before = {
  all: [],
  find: [
    auth.verifyToken(),
    auth.restrictToAuthenticated(),
    auth.populateUser()
  ],
  get: [
    auth.verifyToken(),
    auth.restrictToAuthenticated(),
    auth.populateUser()
  ],
  create: [
    auth.hashPassword(),
    init(),
    gravatar()
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: '_id' }),
    edit()
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: '_id' }),
    edit()
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: '_id' })
  ]
};

exports.after = {
  all: [hooks.remove('password')],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
