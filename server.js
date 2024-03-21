const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

const PORT = 5000;

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT} in dev mode`);
});
