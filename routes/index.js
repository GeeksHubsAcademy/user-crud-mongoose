var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GeeksHubs' });
});
router.get('/login',(req,res)=>{
  res.render('login',{title:'Login - GeeksHubs'})
})
module.exports = router;
