const productRepository = require("../repositories/productRepository")

const registerNewProduct = async (productData) => {
    // Logic: Product ka naam duplicate nahi hona chahiye (Example)

    const existing = await productRepository.findByName(productData.name)

    if (existing) {
        throw new Error("Product with this same name already exist")

    }
    // Logic: Agar discount 50% se zyada hai toh error do

    if (productData.discount > 50) {
        productData.isSpecialOffer = true
    }

    return await productRepository.saveToDB(productData)
}

module.exports = {registerNewProduct}