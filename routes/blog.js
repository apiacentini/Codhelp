const express = require('express');
const router = express.Router();

/* GET blog listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:nome', function(req,res,next) {
  res.render('hello', {message: req.params.nome });
});

module.exports = router;
