const utils = require('../../common/utils');

const getSalt = () => {
  const salt = utils.makeSalt();
  const EncryptedPassword = utils.encryptPassword('123123', salt);
  console.log(EncryptedPassword);
};

module.exports = {
  getSalt
};
