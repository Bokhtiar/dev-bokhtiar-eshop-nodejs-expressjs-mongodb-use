const {Schema, model} = require('mongoose')

const newSchema = new Schema({
    Category_id: {
        type: String,
        trim: true
    },
    title:{
        type: String,
        trim: true,
        required : true
    },
    price:{
        type:String,
        trim:  true,
        required: true
    },
    description:{
        type: String,
        trim: true,
        required: true
    },
    colors: [{
        type: String,
        trim: true,
        required:true
    }],
    product_Status: {
        type: String,
        default: 0
    }
},{
    timestamps:true,
})

const products = model("products", newSchema)
module.exports = products