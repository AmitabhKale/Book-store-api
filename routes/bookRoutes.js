const express = require("express");
const { getAllBooks, getBookById } = require("../controllers/bookController");
const router = express.Router();

// @Base-Route: api/books

router.get("/", getAllBooks);
router.get("/:id", getBookById);

module.exports = router;
