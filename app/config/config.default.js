const productConfig = {
  mysql: {
    port: '3306',
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'busbooking',
    connectionLimit: 10
  }
};

const localConfig = {
  mysql: {
    port: '3306',
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'busbooking',
    connectionLimit: 10
  }
};

// 本地运行是没有 process.env.NODE_ENV 的，借此来区分[开发环境]和[生产环境]
const config = process.env.NODE_ENV ? productConfig : localConfig;

module.exports = config;
