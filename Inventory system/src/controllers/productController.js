const productService = require("../services/productService");

const createProduct = async (req, res) => {
  try {
    // Sirf service ko data pass karo
    const result = await productService.registerNewProduct(req.body);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createProduct };
