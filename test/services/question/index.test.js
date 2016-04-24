'use strict';

const assert = require('assert');
const app = require('../../../src/server');

describe('questions service', () => {
  it('registered the questions service', () => {
    assert.ok(app.service('questions'));
  });
});
