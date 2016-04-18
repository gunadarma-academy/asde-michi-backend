// message/hooks/init.js

'use strict';

const assert = require('assert');
const init = require('../../../../src/services/message/hooks/init.js');

describe('message init hook', () => {
  it('returns a function', () => {
    var hook = init();
    assert.equal(typeof hook, 'function');
  });

  it('filters data as expected', () => {
    const mockHook = {
      type: 'before',
      app: {},
      params: {
        user: {
          _id: '123'
        }
      },
      result: {},
      data: {
        text: 'arlin&'
      }
    };

    init()(mockHook);

    assert.deepEqual(mockHook.data, {
      text: 'arlin&amp;',
      author: '123',
      created_at: new Date().getTime()
    });
  });
});
