// question/hooks/init.js

'use strict';

const init = require('../../../../src/services/question/hooks/init.js');
const assert = require('assert');
const moment = require('moment');

describe('question init hook', () => {
  it('type of hook returns a function', () => {
    var hook = init();
    assert.equal(typeof hook, 'function');
  });

  it('create title and description (include user id as param)', () => {
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
        title: 'Jalan kaki di Jakarta',
        description: 'Cara jalan kaki di Jakarta yang aman gimana ya?'
      }
    };

    init()(mockHook);

    assert.deepEqual(mockHook.data, {
      author: '123',
      title: 'Jalan kaki di Jakarta',
      description: 'Cara jalan kaki di Jakarta yang aman gimana ya?',
      created_at: moment().unix()
    });
  });
});
