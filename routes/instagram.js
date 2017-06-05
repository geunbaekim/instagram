module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  var mysql=require('mysql');
  var dbconfig=require('../database.js');
  var conn = mysql.createConnection(dbconfig);


  router.get('/join', function(req, res, next) {
    res.render('join', {
      title: 'Join'
    });
  });

  router.get('/login', function(req, res, next) {
    res.render('login', {
      title: 'Login'
    });
  });

  router.get('/logout', function(req, res, next) {
      delete req.session.authId;
      req.session.save(function() {
        res.redirect('/instagram');
      });
    });



  return router;
}
