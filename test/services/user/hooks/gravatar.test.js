'use strict';

const assert = require('assert');
const gravatar = require('../../../../src/services/user/hooks/gravatar.js');

describe('user gravatar hook', () => {
  it('type of hook returns a function', () => {
    var hook = gravatar();
    assert.equal(typeof hook, 'function');
  });

  it('returns and adds a gravatar url', () => {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {
        email: 'admin@arlin.link'
      }
    };

    gravatar()(mockHook);

    assert.ok(mockHook.data.avatar);
  });
});
