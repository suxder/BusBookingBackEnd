const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const { User, SuperAdmin, PTCAdmin } = require('../model/index');

const UserService = {
  async findOne (tel, pwd) {
    const sql = `
    SELECT 'user' AS TYPE, userID AS id, userPwd AS pwd, salt, userRole FROM USER
    UNION
    SELECT 'ptc_admin' AS TYPE, adminID AS id, adminPwd AS pwd, salt, adminRole AS userRole FROM ptc_admin
    UNION
    SELECT 'super_admin' AS TYPE, adminID AS id, adminPwd AS pwd, salt, adminRole AS userRole FROM super_admin
    WHERE  telephone = '${tel}';
    `;
    // 一段平淡无奇的 SQL 查询语句
    try {
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

module.exports = {
  UserService,
  PostService
};
