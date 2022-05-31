const category = require('../../models/category.model')

const Index = async (req, res, next) => {
    try {
        const results = await category.find()
        res.status(200).json({
            status:true,
            data: results,        
            message: "list of category"
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const Store = async (req, res, next) => {
    try {
        const {name} = req.body
        const newCategory = new category({
            name
        })
        await newCategory.save()
        
        res.status(200).json({
            status:200,
            message: "Category Added Successfully...!"
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    Index,
    Store
}