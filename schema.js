const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({

  title: {type: String},
  link: {type: String},
  description: {type: String},

  item:{
    id: {type: String},
    title: {type: String},
    description: {type: String},
    link: {type: String},
    image_link: {type: String},
    condition: {type: String},
    availability: {type: String},
    price: {type: Number},
    shipping: {
      0:{
        country: {type: String},
        service: {type: String},
        price: {type: String}
      }
    },

    gtin: {type: String},
    brand: {type: String},
    mpn: {type: String},

    google_product_category: {type: String},
    product_type: {type: String},
    brand: {type: String},
    gender: {type: String},
    age_group: {type: String},
    color: {type: String},
    size: {type: String},

    item_group_id: {type: String},

    sale_price: {type: Number},
    sale_price_effective_date: {type: String},

    additional_image_link:{
      0:{ additional_image_link: {type: String} }
    }

  }

});

module.exports = mongoose.model("productModel", productSchema);
