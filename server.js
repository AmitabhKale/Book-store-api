const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 5000;

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT} in dev mode`);
});
