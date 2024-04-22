const Book = require("../models/bookSchema");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    res.status(200).json(books);
  } catch (e) {
    res.status(500).json({
      msg: e.message,
    });
  }
};

const getBookById = async (req, res) => {
  const { bookId } = req.params;

  try {
    const book = await Book.findOne({ _id: bookId });

    res.status(200).json(book);
  } catch (e) {
    res.status(400).json({
      msg: "Invalied Book Id",
    });
  }
};

const addBook = async (req, res) => {
  const { title, description, price, author } = req.body;

  try {
    const book = await Book.create({
      title,
      description,
      price,
      author,
    });

    if (book) {
      res.status(201).json(book);
    }
  } catch (e) {
    res.status(500).json({
      msg: e.message,
    });
  }
};

const updateBookById = async (req, res) => {
  const { title, description, price, author } = req.body;
  const { bookId } = req.params;

  try {
    const bookUpd = {
      title,
      description,
      price,
    };

    const book = await Book.findOneAndUpdate({ _id: bookId }, bookUpd, {
      new: true,
    });

    if (book) {
      res.status(200).json(book);
    }
  } catch (e) {
    res.status(500).json({
      msg: e.message,
    });
  }
};

const deleteBookById = async (req, res) => {
  const { bookId } = req.params;
  try {
    const bookExist = await Book.findOne({ _id: bookId });

    if (!bookExist) {
      throw new Error("Book Not Found");
    }

    const bookDel = await Book.deleteOne({ _id: bookId });
    res.status(200).json(bookDel);
  } catch (e) {
    res.status(500).json({
      msg: e.message,
    });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBookById,
  deleteBookById,
};
