const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const bookRoutes = require("./routes/bookRoutes");
const authRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config({});

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use("/api/books", bookRoutes);
app.use("/api/user", authRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT} in dev mode`);
});
