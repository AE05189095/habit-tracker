var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hola', function(req, res, next) {
  res.json({"mensaje":"Hola mundo"})
});

module.exports = router;
