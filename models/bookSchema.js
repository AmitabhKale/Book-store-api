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
    onSale: {
      type: Boolean,
      required: true,
      default: false,
    },
    reviews: [],
    qty: {
      online: {
        type: Number,
        default: 0,
      },
      store: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
