'use strict';

// We need this to create the MD5 hash
const crypto = require('crypto');
// The Gravatar image service
const gravatarUrl = 'https://s.gravatar.com/avatar';
// The size query. Our app needs 60px images
const query = `s=60`;
// Returns a full URL to a Gravatar image for a given email address
const gravatarImage = email => {
  // Gravatar uses MD5 hashes from an email address to get the image
  const hash = crypto.createHash('md5')
    .update(email)
    .digest('hex');
  return `${gravatarUrl}/${hash}?${query}`;
};

// If used with mongoose model
module.exports = function (email) {
  return function (email) {
    // Return the Gravatar image
    gravatarImage(email);
  };
};

// If used for hook
// module.exports = function () {
//   return function (hook) {
//     // Assign the new data with the Gravatar image
//     hook.data = Object.assign({}, hook.data, {
//       avatar: gravatarImage(hook.data.email)
//     });
//   };
// };
