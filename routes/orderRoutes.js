const express = require("express");
const { auth } = require("../middlewares/authMiddleware");
const {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getAllOrders,
} = require("../controllers/orderController");
const router = express.Router();

// @Base-Route: api/orders

router.post("/add", auth, addOrderItems);
router.get("/", auth, getAllOrders);
router.get("/myorders", auth, getMyOrders);
router.get("/:orderid", getOrderById);

module.exports = router;
