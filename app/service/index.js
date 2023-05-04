const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const utils = require('../common/utils');
const { User, SuperAdmin, PTCAdmin } = require('../model/index');

const UserService = {
  async findOne (tel, pwd) {
    const sql = `
    SELECT 'user' AS TYPE, userID AS id, userPwd AS pwd, salt, userRole FROM USER
    WHERE  telephone = '${tel}'
    UNION
    SELECT 'ptc_admin' AS TYPE, adminID AS id, adminPwd AS pwd, salt, adminRole AS userRole FROM ptc_admin
    WHERE  telephone = '${tel}'
    UNION
    SELECT 'super_admin' AS TYPE, adminID AS id, adminPwd AS pwd, salt, adminRole AS userRole FROM super_admin
    WHERE  telephone = '${tel}'
    `;
    // 一段平淡无奇的 SQL 查询语句
    try {
      console.log(tel);
      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT,
        // 查询方式
        raw: true,
        // 是否使用数组组装的方式展示结果
        logging: false
        // 是否将 SQL 语句打印到控制台，默认为 true
      });
      const user = res;
      // 直接返回查询后的结果。
      console.log(res);
      return user;
    } catch (error) {
      return {
        success: 0,
        msg: `Service error: ${error}`
      };
    }
  },
  async getInfoByID (id, type) {
    if (parseInt(type) === 0) {
      const { dataValues: res } = await User.findOne({
        where: {
          userID: id
        },
        attributes: { exclude: [ 'userPwd', 'salt' ] }
      });
      return res;
    } else if (parseInt(type) === 1) {
      const { dataValues: res } = await PTCAdmin.findOne({
        where: {
          adminID: id
        },
        attributes: { exclude: [ 'adminPwd', 'salt' ] }
      });
      return res;
    } else if (parseInt(type) === 2) {
      const { dataValues: res } = await SuperAdmin.findOne({
        where: {
          adminID: id
        },
        attributes: { exclude: [ 'adminPwd', 'salt' ] }
      });
      return res;
    }
  },
  async userSignUp (telephone, userPwd, userName, userGender, userIDCard, userEmail, userAddress) {
    const salt = utils.makeSalt();
    const hashedUserPwd = utils.encryptPassword(userPwd, salt);
    const user = {
      telephone: telephone,
      userPwd: hashedUserPwd,
      userName: userName,
      userGender: parseInt(userGender),
      userIDCard: userIDCard,
      userEmail: userEmail,
      userAddress: userAddress,
      salt: salt,
      userRole: 0
    };
    const { dataValues: res } = await User.create(user);
    return res;
  }
};

const PostService = {
  async findContentByID (postID) {
    const sql = `
      SELECT 
        title, metaTitle, summary, updatedAt, content
      FROM 
        post
      WHERE 
        id = '${postID}';
    `;
    try {
      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT,
        // 查询方式
        raw: true,
        // 是否使用数组组装的方式展示结果
        logging: false
        // 是否将 SQL 语句打印到控制台，默认为 true
      });
      const data = res;
      // 直接返回查询后的结果。
      console.log(data);
      return data;
    } catch (error) {
      return {
        success: 0,
        msg: `Service error: ${error}`
      };
    }
  }
};

const SuperAdminService = {
  async createPtcAdmin (adminName, telephone, adminPwd, adminPtc) {
    // 组织新增的Ptc管理员信息
    const salt = utils.makeSalt();
    const hashedAdminPwd = utils.encryptPassword(adminPwd, salt);
    const PtcAdmin = {
      adminName: adminName,
      telephone: telephone,
      adminPwd: hashedAdminPwd,
      adminRole: 1,
      adminPtc: adminPtc,
      salt: salt
    };
    const { dataValues: res } = await PTCAdmin.create(PtcAdmin);
    return res;
  },
  // 查询所有的PTC管理员
  async queryAllPtcAdmin () {
    const data = await PTCAdmin.findAll({
      attributes: { exclude: [ 'adminPwd', 'salt' ] },
      raw: true
    });
    return data;
  }
  // 根据PTC管理员信息修改管理员信息
};

module.exports = {
  UserService,
  PostService,
  SuperAdminService
};
