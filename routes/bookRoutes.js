const express = require("express");
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBookById,
  deleteBookById,
} = require("../controllers/bookController");
const { auth } = require("../middlewares/authMiddleware");
const router = express.Router();

// @Base-Route: api/books

router.get("/", getAllBooks);
router.get("/:bookId", getBookById);
router.post("/add", auth, addBook);
router.put("/:bookId", auth, updateBookById);
router.delete("/:bookId", auth, deleteBookById);

module.exports = router;
