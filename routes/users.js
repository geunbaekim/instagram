var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/1', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
