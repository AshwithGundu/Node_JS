var express = require('express');
var router = express.Router();
var cus = require('../m/a.m');
var cu = require('../m/b.m');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET a listing. */
router.get('/a', function(req, res, next) {
  res.render('a', { title: 'Express' });
});

/* GET API call. */
router.get('/call/a', function (req, res, next) {
  cus.find({},function(err,results){
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "user record fetched successfully",data:results })
    }
  })
  });

/* POST data. */
router.post('/a',function(req,res,next){
  var newcustomer = new cus(req.body);
  newcustomer.save(
    function (err, data) {
      if (err) return console.error(err);
      console.log("success")
      res.send("sess")
      res.send(req.body)
    }
  )
 
});

router.get('/b', function(req, res, next) {
  res.render('b', { title: 'Express' });
});

router.get('/call/b', function (req, res, next) {
  cu.find({},function(err,results){
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "user record fetched successfully",data:results })
    }
  })
  });


router.post('/b',function(req,res,next){
  var newcustomer = new cu(req.body);
  newcustomer.save(
    function (err, data) {
      if (err) return console.error(err);
      console.log("success")
      res.send("sess")
      res.send(req.body)
    }
  )
 
});

module.exports = router;
