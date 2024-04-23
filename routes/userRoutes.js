const express = require("express");
const { login, register, myData } = require("../controllers/authController");
const { auth } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/me", auth, myData);

module.exports = router;
