'use strict';

const globalHooks = require('../../src/hooks/index');
const assert = require('assert');
const moment = require('moment');

describe('global hooks', function() {

  it('myHooks can be used', function() {
    const mockHook = {
      type: {},
      app: {},
      params: {},
      result: {},
      data: {}
    };
    // globalHooks.myHook()(mockHook);
    // assert.ok(mockHook.globalHooks.myHook);
  });

  it('addUpdatedAt can be used', function() {
    const mockHook = {
      type: {},
      app: {},
      params: {},
      result: {},
      data: {}
    };
    // globalHooks.addUpdatedAt()(mockHook);
    // assert.ok(mockHook.globalHooks.addUpdatedAt);
  });

});
