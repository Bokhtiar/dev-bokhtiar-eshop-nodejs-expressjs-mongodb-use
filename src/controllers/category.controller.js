const category = require('../models/category.model')

const Index = async (req, res, next) => {
    res.status(200).json({
        status:true,
        message: "list of category"
    })
}

module.exports = {
    Index,
}