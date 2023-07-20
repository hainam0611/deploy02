var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var country = "Vietnam"
  var year = "2023"
  var grade = "7.5"
  var pass = "true"
  var gender = "male"
  var sport = ["soccer","golf","running","gym"] //array
  res.render('index',
  {
    country: country,
    year: year,
    grade: grade,
    pass: pass,
    gender: gender,
    sport : sport
  })
});

module.exports = router;
