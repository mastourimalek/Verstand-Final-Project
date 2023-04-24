const Order = require("../models/Order");
const Product = require("../models/Product");

exports.postOrder = async (req, res) => {
  try {
    const { email, adress, phone } = req.body;
    const productToGet = await Product.findOne({ _id: req.params.id });
    if (!productToGet) {
      return res.status(404).send({ errors: [{ msg: "Product not found" }] });
    }

    const newOrder = new Order({
      email,
      productname: productToGet.name,
      adress,
      phone,
    });
    await newOrder.save();
    res
      .status(200)
      .send({ success: [{ msg: "order added successfully" }], newOrder });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "cannot add order!!!" }] });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const listOrders = await Order.find();
    res.status(200).send({ msg: "This is the list Orders", listOrders });
  } catch (error) {
    res.status(400).send({ msg: "cannot get all Orders", error });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { _id } = req.params;
    await Order.findOneAndDelete({ _id });
    res.status(200).send({ msg: "Order deleted" });
  } catch (error) {
    res.status(400).send({ msg: "cannot delete this Order", error });
  }
};
