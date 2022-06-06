const products = require('../../models/products.model')

const Store = async (req, res, next) => {
    try {
        const {
            category_id,
            title,
            price,
            image,
            description,
            colors
        } = req.body

        const newProduct = new products({
            category_id,
            title,
            price,
            image,
            description,
            colors
        })

        await newProduct.save()

        res.status(200).json({
            status: true,
            message: "Product Added Successfully...!"
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    Store
}