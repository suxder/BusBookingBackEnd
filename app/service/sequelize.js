const Sequelize = require('sequelize');
const db = require('../config/config.default');
const sequelize = new Sequelize(db.mysql.database, db.mysql.user, db.mysql.password || null, {
  // 数据库地址
  host: db.mysql.host,
  // 自定义端口; 默认值: 3306
  port: db.mysql.port,
  logging: false,
  dialect: 'mysql',
  pool: {
    // 连接池中最大连接数量
    max: db.mysql.connectionLimit,
    // 连接池中最小连接数量
    min: 0,
    acquire: 30000,
    // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    idle: 10000
  },
  // 东八时区
  timezone: '+08:00'
});

// 测试数据库链接
sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch((err) => {
    // 数据库连接失败时打印输出
    console.error(err);
    throw err;
  });

module.exports = sequelize;
