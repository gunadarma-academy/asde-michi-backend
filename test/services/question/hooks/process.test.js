'use strict';

const assert = require('assert');
const process = require('../../../../src/services/question/hooks/process.js');

// describe('question process hook', () => {
//   it('returns a function', () => {
//     var hook = process();
//     assert.equal(typeof hook, 'function');
//   });
//
//   it('filters data as expected', () => {
//     const mockHook = {
//       type: 'before',
//       app: {},
//       params: {
//         user: {
//           _id: '1'
//         }
//       },
//       result: {},
//       data: {
//         title: 'Jalan kaki di Jakarta'
//       }
//     };
//
//     process()(mockHook);
//
//     assert.deepEqual(mockHook.data, {
//       title: 'Jalan kaki di Jakarta',
//       author: '1',
//       created_at: new Date().getTime()
//     });
//   });
// });
