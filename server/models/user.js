const db = require('../config/db.js'), 
      userModel = '../schema/user.js'; // 引入user的表结构
const Company = db.Company; // 引入数据库

const User = Company.import(userModel); // 用sequelize的import方法引入表结构，实例化了User。

const getUserById = function* (id){ // 注意是function* 而不是function 对于需要yield操作的函数都需要这种generator函数。
  const userInfo = yield User.findOne({ // 用yield控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  });

  return userInfo // 返回数据
}
const createUser = function* (data) {
  yield User.create({
    user_name: data.name,
    password: data.password

  })
  return true
}

// 通过用户名查找
const getUserByName = function* (name){
  const userInfo = yield User.findOne({
    where: {
      user_name: name
    }
  })

  return userInfo
}


module.exports = {
  getUserById,
  getUserByName,
  createUser    // 导出getUserById的方法，将会在controller里调用
}