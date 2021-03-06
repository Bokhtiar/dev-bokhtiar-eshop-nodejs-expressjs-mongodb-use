const products = require('../../models/products.model') 


    /* product List */
const Index = async (req, res, next) => {
    try {
        const results = await products.find()
        res.status(200).json({
            status: 200,
            data: results,
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

    /* product store */
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
    /* product show */
const Show = async (req, res, next) => {
    try {
        const {id} = req.params
        const result = await products.findById(id)

        res.status(200).json({
            status: true,
            data : result
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}


  /* product Update */
  const Update = async (req, res, next) => {
    try {
        const {id} = req.params
        const {
            category_id,
            title,
            price,
            image,
            description,
            colors
        } = req.body

        await products.findByIdAndUpdate(
            id,
            {
                $set:{
                    category_id,
                    title,
                    price,
                    image,
                    description,
                    colors
                }
            }
        )

        res.status(200).json({
            status: true,
            message: "Product Update Successfully...!"
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const Destroy = async(req, res, next) => {
    try {
        const {id} = req.params
        await products.findByIdAndDelete(id)

        res.status(200).json({
            status:true,
            message: "Delete successfuly"
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}



module.exports = {
    Index,
    Store,
    Show,
    Update,
    Destroy
}