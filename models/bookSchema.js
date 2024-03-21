const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    lastPublished: [],
    price: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
    },
    reviews: [],
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
