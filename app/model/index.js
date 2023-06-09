const { DataTypes } = require('sequelize');
const sequelize = require('../service/sequelize');

// 建立普通用户表模型
const User = sequelize.define('user', {
  userID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    // 主键
    autoIncrement: true,
    // 自增
    comment: '自增id'
    // 注释:只在代码中有效
  },
  telephone: {
    type: DataTypes.STRING,
    primaryKey: true,
    // 主键
    allowNull: false,
    // 主键非空约束
    unique: true,
    // 主键唯一性约束
    comment: '用户电话号码'
  },
  userName: {
    type: DataTypes.STRING,
    comment: '用户姓名'
  },
  userPwd: {
    type: DataTypes.STRING,
    comment: '用户加盐加密后的密码'
  },
  userGender: {
    type: DataTypes.INTEGER,
    comment: '用户性别'
  },
  userIDCard: {
    type: DataTypes.STRING,
    allowNull: false,
    // 非空约束
    unique: true,
    // 唯一性约束
    comment: '用户身份证号'
  },
  userEmail: {
    type: DataTypes.STRING,
    comment: '用户邮箱'
  },
  userAddress: {
    type: DataTypes.STRING,
    comment: '用户地址'
  },
  userRole: {
    type: DataTypes.INTEGER,
    comment: '用户角色'
  },
  salt: {
    type: DataTypes.STRING
  }
}, {
  // 使用自定义表名
  freezeTableName: true,
  // 去掉默认的添加时间和更新时间
  timestamps: false,
  indexes: [
    // 普通索引,默认BTREE
    {
      unique: true,
      fields: [ 'userID', 'telephone' ]
    }
  ]
});

// 建立超级管理员模型
const SuperAdmin = sequelize.define('super_admin', {
  adminID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    // 主键
    autoIncrement: true,
    // 自增
    comment: '自增id'
    // 注释:只在代码中有效
  },
  adminName: {
    type: DataTypes.STRING,
    comment: '超级管理员姓名'
  },
  telephone: {
    type: DataTypes.STRING,
    primaryKey: true,
    // 主键
    comment: '超级管理员电话号码'
  },
  adminPwd: {
    type: DataTypes.STRING,
    comment: '超级管理员加盐加密后的密码'
  },
  adminRole: {
    type: DataTypes.INTEGER,
    comment: '超级管理员所属角色'
  },
  salt: {
    type: DataTypes.STRING
  }
}, {
  // 使用自定义表名
  freezeTableName: true,
  // 去掉默认的添加时间和更新时间
  timestamps: false,
  indexes: [
    // 普通索引,默认BTREE
    {
      unique: true,
      fields: [ 'adminID', 'telephone' ]
    }
  ]
});

// 建立客运中心管理员模型
const PTCAdmin = sequelize.define('ptc_admin', {
  adminID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    // 主键
    autoIncrement: true,
    // 自增
    comment: '自增id'
    // 注释:只在代码中有效
  },
  adminName: {
    type: DataTypes.STRING,
    comment: '管理员姓名'
  },
  telephone: {
    type: DataTypes.STRING,
    primaryKey: true,
    // 主键
    allowNull: false,
    // 主键非空约束
    unique: true,
    // 主键唯一性约束
    comment: '管理员电话号码'
  },
  adminPwd: {
    type: DataTypes.STRING,
    comment: '管理员加盐加密后的密码'
  },
  adminRole: {
    type: DataTypes.INTEGER,
    comment: '管理员所属角色'
  },
  adminPtc: {
    type: DataTypes.STRING,
    comment: '管理员所属客运中心名称'
  },
  salt: {
    type: DataTypes.STRING
  }
}, {
  // 使用自定义表名
  freezeTableName: true,
  // 去掉默认的添加时间和更新时间
  timestamps: false,
  indexes: [
    // 普通索引,默认BTREE
    {
      unique: true,
      fields: [ 'adminID', 'telephone' ]
    }
  ]
});

// 建立车辆模型
const Car = sequelize.define('cars', {
  adminID: {
    type: DataTypes.INTEGER,
    comment: '客运中心管理员ID'
    // 注释:只在代码中有效
  },
  carID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    comment: '车辆ID'
  },
  carLPN: {
    type: DataTypes.STRING,
    allowNull: false,
    // 主键非空约束
    unique: true,
    // 主键唯一性约束
    comment: '车辆车牌号'
  },
  seatsNum: {
    type: DataTypes.INTEGER,
    comment: '座位数量'
  },
  carType: {
    type: DataTypes.STRING,
    comment: '车辆类型（小型客车、中型客车、大型客车）'
  }
}, {
  // 使用自定义表名
  freezeTableName: true,
  // 去掉默认的添加时间和更新时间
  timestamps: false,
  indexes: [
    // 普通索引,默认BTREE
    {
      unique: true,
      fields: [ 'carID' ]
    }
  ]
});

// 建立路线模型
const Route = sequelize.define('routes', {
  adminID: {
    type: DataTypes.INTEGER,
    comment: '客运中心管理员ID'
    // 注释:只在代码中有效
  },
  routeID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    comment: '路线ID'
  },
  departureStation: {
    type: DataTypes.STRING,
    comment: '出发站'
  },
  terminalStation: {
    type: DataTypes.STRING,
    comment: '出发站'
  },
  runningTime: {
    type: DataTypes.STRING,
    comment: '运行时长'
  }
}, {
  // 使用自定义表名
  freezeTableName: true,
  // 去掉默认的添加时间和更新时间
  timestamps: false,
  indexes: [
    // 普通索引,默认BTREE
    {
      unique: true,
      fields: [ 'routeID' ]
    }
  ]
});

// 模型同步
(async () => {
  await sequelize.sync();
})();

module.exports = {
  User,
  SuperAdmin,
  PTCAdmin,
  Car,
  Route
};
