const category = require('../../models/category.model')

const Index = async (req, res, next) => {
    try {
        const results = category.find()

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

module.exports = {
    Index,
}