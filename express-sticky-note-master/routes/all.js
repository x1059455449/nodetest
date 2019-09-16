var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data;
  if(req.session.user){
    data = {
      isLogin: true,
      user: req.session.user
    }
  }else{
    data = {
      isLogin: false
    }
  }
  console.log(data)
  res.render('index', data);//这里渲染的是views文件夹下的index.ejs
});

module.exports = router;
