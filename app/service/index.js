const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const UserService = {
  async findOne (email, pwd) {
    const sql = `
      SELECT
        id, hashedPassword, salt
      FROM
        user
      WHERE
        email = '${email}'
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
