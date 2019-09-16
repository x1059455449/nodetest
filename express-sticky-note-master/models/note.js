
var Sequelize = require('sequelize');
var path = require('path');

var sequelize = new Sequelize(undefined,undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',

  // SQLite only
  storage: path.join(__dirname, '../database/database.sqlite') 
});

/*
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
  */


var Note = sequelize.define('note', {
  text: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  }
});

Note.sync()
//Note.drop();
//Note.sync({force: true})
// // force: true will drop the table if it already exists
// Note.sync({force: true}).then(function () {//如果不存在，则强制创建force: true
//   // Table created
//   return Note.create({
//     text: 'hello world'
//   });
// });

// Note.create({
//   text: 'haha'
// })



// Note.destroy({where:{text:'haha'}}, function(){//查询某一个条件或者某一个字段where:{text:'haha'}
//   console.log('destroy...')
//   console.log(arguments)
// })
// Note.findAll({raw: true}).then(function(articles) {//获取原始数据raw: true
//   console.log(articles)
// })

module.exports = Note;
