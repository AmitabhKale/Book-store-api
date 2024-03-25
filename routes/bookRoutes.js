const express = require("express");
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBookById,
  deleteBookById,
} = require("../controllers/bookController");
const router = express.Router();

// @Base-Route: api/books

router.get("/", getAllBooks);
router.get("/:bookId", getBookById);
router.post("/add", addBook);
router.put("/:bookId", updateBookById);
router.delete("/:bookId", deleteBookById);

module.exports = router;
