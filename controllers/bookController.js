const getAllBooks = (req, res) => {
  res.send("All Books Served");
};

const getBookById = (req, res) => {
  res.send("Get Single Book");
};

module.exports = {
  getAllBooks,
  getBookById,
};
