const utils = require('../../common/utils');

const getSalt = () => {
  const salt = utils.makeSalt();
  console.log(salt);
  const EncryptedPassword = utils.encryptPassword('123456', salt);
  console.log(EncryptedPassword);
};

getSalt();

module.exports = {
  getSalt
};
