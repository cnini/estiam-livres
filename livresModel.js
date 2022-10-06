const mongoose = require("mongoose")

const livresSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  country: {
    type: String
  },
  imageLink: {
    type: String
  },
  language: {
    type: String
  },
  link: {
    type: String
  },
  pages: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  }
})

module.exports = mongoose.model("Livres", livresSchema)