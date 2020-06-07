const express  = require('express');
const router = express.Router();
const db = require('./../../database/index');

router.get('/',(req,res)=>{
  //res.send('hello prince')
  db.select().from('country').then((data)=>res.send(data))
});


// For POST request you can use POSTMAN and send the req body via KEY VALUE pair
router.post('/',(req, res)=>{
  db.insert(req.body).returning('*').into('country').then((data) => {
    res.send(data);
  })
  //console.log(req.body);
  //return res.send(req.body);
});



module.exports = router;
