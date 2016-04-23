'use strict';

const edit = require('../../../../src/services/user/hooks/edit.js');
const assert = require('assert');
const moment = require('moment');

describe('user edit hook', () => {
  it('returns a function', () => {
    var hook = edit();
    assert.equal(typeof hook, 'function');
  });

  it('adds update_at', () => {
    const mockHook = {
      type: 'before',
      app: {},
      params: {
        user: {
          _id: '123',
          email: 'admin@arlin.link',
          username: 'admin'
        },
      },
      result: {},
      data: {
        email: 'administrator@arlin.link',
        username: 'administrator'
      }
    };

    edit()(mockHook);

    assert.deepEqual(mockHook.data, {
      email: 'administrator@arlin.link',
      username: 'administrator',
      updated_at: moment().unix()
    });
  });
});
