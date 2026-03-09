const productService = require("../services/productService")


const createProduct = async (req, res) => {
    try {
        // Sirf service ko data pass karo
        const result = await productService.registerNewProduct(req.body)
    } catch (error) {
        
    }
}