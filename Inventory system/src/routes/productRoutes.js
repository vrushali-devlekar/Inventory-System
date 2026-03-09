const express = require("express");
const router = express.router();
const productController = require("../controllers/productController");

router.post("/add", productController.createProduct);

module.exports = router;
