const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  Price: { type: String },
  userId: { type: String},
  company:{type:String}
});

module.exports = mongoose.model("product", productSchema);
