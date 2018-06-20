var express = require('express');
var customer = require('../m/r.m');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 
    'Express' });
   
});


/* Post home page. */
router.post('/',function(req,res,next){
  var newcustomer = new customer(req.body);
  newcustomer.save(
    function (err, data) {
      if (err) return console.error(err);
      console.log("success")
      res.send("sucess")
      
    }
  )
 
});

/* GET API call. */
router.get('/call', function (req, res, next) {
  customer.find({},function(err,results){
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "user record fetched successfully",data:results })
    }
  })
  });



module.exports = router;
