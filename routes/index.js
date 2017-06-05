var express = require('express');
var session= require('express-session');
var router = express.Router();



router.get('/home', function(req, res) {
  res.render('index', { title: 'home' });
});
router.get('/join', function(req, res) {
  res.render('join', { title: 'join' });
});
router.get('/mypage', function(req, res) {
  res.render('mypage', { title: 'mypage' });
});





module.exports = router;

var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'gbkim01!',
  database : 'instagram'
});

conn.connect();

router.get('/',function(req,res,next){
 res.render('home',{tittle:'Express'});
 var sql="SELECT*FROM user";
conn.query(sql, function (error, results, fields) {
  if (error) {console.log(error);}
else{
  console.log('results',results);
  console.log('fileds',fields); }
});
});
