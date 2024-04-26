const Order = require("../models/orderSchema");

const addOrderItems = async (req, res) => {
  const {
    orderItems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    shippingAddress,
    paymentMethod,
  } = req.body;

  try {
    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No Order Items");
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        shippingAddress,
        paymentMethod,
      });

      const createdOrder = await order.save();

      res.status(201).json(createdOrder);
    }
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderid).populate(
      "user",
      "name email"
    );

    if (!order) {
      throw new Error("No Order Found");
    }

    res.status(200).json(order);
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });

    if (orders) {
      res.status(200).json(orders);
    }
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    console.log("inside getall");
    const orders = await Order.find({}).populate("user", "name email");

    if (orders) {
      res.status(200).json(orders);
    }
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

module.exports = {
  addOrderItems,
  getOrderById,
  getMyOrders,
  getAllOrders,
};
