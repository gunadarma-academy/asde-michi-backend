'use strict';

const assert = require('assert');
const app = require('../../../src/server');

describe('user service', () => {
  it('registered the users service', () => {
    assert.ok(app.service('users'));
  });
});
