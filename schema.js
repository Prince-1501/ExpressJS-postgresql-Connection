const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({

  //First example
  
  id: {type: String},
  title: {type: String},
  description: {type: String},
  link: {type: String},
  image_link: {type: String},
  condition: {type: String},
  availability: {type: String},
  price: {type: Number},
  shipping: {
    country: {type: String},
    service: {type: String},
    price: {type: String}
  },

  // following 3 attributes are required fot this item according to the Unique Product Identifier Rules
  gtin: {type: String},
  brand: {type: String},
  mpn: {type: String},

  // following attributes are not required for this item, but supplying them is recommended
  google_product_category: {type: String},
  product_type: {type: String},


});

module.exports = mongoose.model("productModel", productSchema);
