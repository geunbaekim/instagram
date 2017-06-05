var express = require('express');
var router = express.Router();

/* POST 호출 처리 */
router.post('/login', function(req, res, next) {
    console.log('POST 방식으로 서버 호출됨');
    var msg = req.body.id;
    var pw = req.body.pw;
    res.send({result:true, msg:msg});
});

module.exports = router;
