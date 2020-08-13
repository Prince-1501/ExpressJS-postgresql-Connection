const express  = require('express');
const router = express.Router();
const Product = require('../../schema')


router.get('/',async (req,res)=>{
	const data = await Product.find({})
	res.send(data)
	
});



// For POST request you can use POSTMAN and send the req body via KEY VALUE pair
router.post('/',async (req, res)=>{
	const data = req.body
    const product = new Product({
		...data
    })
    console.log(data)
    res.sendStatus(200)
  const dataSaved = await product.save()
  console.log("prodct saved !")
});



module.exports = router;
