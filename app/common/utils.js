const assert = require('assert');
const crypto = require('crypto');

const throwError = (code, message) => {
  const err = new Error(message);
  err.code = code;
  throw err;
};

/**
 * Make salt
 *
 * @return {String}
 * @api public
 */
const makeSalt = () => {
  return crypto.randomBytes(16).toString('base64');
};

/**
 * Encrypt password
 *
 * @param {String} password
 * @param {String} salt
 * @return {String}
 * @api public
 */
const encryptPassword = (password, salt) => {
  if (!password || !salt) return '';
  // eslint-disable-next-line node/no-deprecated-api
  const saltBuf = new Buffer(salt, 'base64');
  return crypto
    .pbkdf2Sync(password, saltBuf, 10000, 64, 'sha1')
    .toString('base64');
};

module.exports = {
  assert,
  throwError,
  makeSalt,
  encryptPassword
};
