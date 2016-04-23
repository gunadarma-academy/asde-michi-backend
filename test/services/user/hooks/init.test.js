'use strict';

const init = require('../../../../src/services/user/hooks/init.js');
const assert = require('assert');
const moment = require('moment');

describe('user init hook', () => {
  it('type of hook returns a function', () => {
    var hook = init();
    assert.equal(typeof hook, 'function');
  });

  it('create id, email, username, adds created_at', () => {
    const mockHook = {
      type: 'before',
      app: {},
      params: {
        user: {
          _id: '123',
        },
      },
      result: {},
      data: {}
    };

    init()(mockHook);

    assert.deepEqual(mockHook.data, {
      created_at: moment().unix()
    });
  });
});
