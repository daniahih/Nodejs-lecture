const items = require("../models/items");

// let items = [
//   { id: 1, name: "Item 1" },
//   { id: 2, name: "Item 2" },
// ];

const itemsController = {
  getAllItems: async (req, res) => {
    try {
      const item = await items.find();
      res.status(201).json({
        success: true,
        data: item,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  createItem: async (req, res) => {
    try {
      console.log(req.body);
      const item = await items.create(req.body);
      res.status(201).json({
        success: true,
        data: item,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  getItemById: async (req, res) => {
    try {
      const item = await items.findById(req.params.id);
      res.status(201).json({
        success: true,
        data: item,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  updateItem: async (req, res) => {
    try {
      const item = await items.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!item) {
        return res
          .status(404)
          .json({ success: false, message: "Item not found" });
      }
      res.status(200).json({
        success: true,
        data: item,
      });
    } catch (error) {
      console.error(error); // It's good to log the error for debugging purposes
      res.status(400).json({ success: false, message: error.message });
    }
  },
  deleteItem: async (req, res) => {
    try {
      const item = await items.findByIdAndDelete(req.params.id);
      if (!item) {
        return res
          .status(404)
          .json({ success: false, message: "Item not found" });
      }
      res
        .status(200)
        .json({ success: true, message: "Item deleted successfully" });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = itemsController;
