var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/include', function(req, res, next) {
//   res.render('include', { title: 'include tutorial' });
// });
module.exports = router;