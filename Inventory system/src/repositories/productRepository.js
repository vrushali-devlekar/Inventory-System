const product = require('../models/Product')

const findByName = async (name) => {
    return await product.findOne
}