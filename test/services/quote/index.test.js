'use strict';

const assert = require('assert');
const app = require('../../../src/server');

describe('quote service', function () {
  it('registered the quotes service', () => {
    assert.ok(app.service('quotes'));
  });
});
