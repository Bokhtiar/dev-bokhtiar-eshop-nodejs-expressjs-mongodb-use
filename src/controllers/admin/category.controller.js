const { response } = require('express')
const category = require('../../models/category.model')

const Index = async (req, res, next) => {
    try {
        const results = await category.find()
        res.status(200).json({
            status: true,
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
        const { name } = req.body
        const newCategory = new category({
            name
        })
        await newCategory.save()

        res.status(200).json({
            status: 200,
            message: "Category Added Successfully...!"
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const Show = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await category.findById(id)
        res.status(200).json({
            status: true,
            data: result
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const Update = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name } = req.body
        await category.findByIdAndUpdate(
            id,
            {
                $set: {
                    name
                }
            }
        )

        res.status(200).json({
            status: true,
            message: "Category Updated Successfully...!"
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const Destroy = async (req, res, next) => {
    try {
        const { id } = req.params
        await category.findByIdAndDelete(id)
        res.status(200).json({
            status: true,
            message: "Category Deleted Successfully...!"
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const Status = async (req, res, next) => {
    try {
        const {id} = req.params
        const value = await category.findById(id)
        if(value.cat_status == 0){
            value.cat_status =1
            await value.save()
            res.status(200).json({
                status:true,
                message: "Category Status Update Successfully...!"
            })
        }else{
            value.cat_status = 0
            await value.save()
            res.status(200).json({
                status:true,
                message: "Category Status Update Successfully...!"
            })
        }
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
    Destroy,
    Status
}