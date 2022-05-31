const {Schema, model} = require('mongoose')

const newSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    cat_status:{
        type: String,
        default: 0
    }
},{
    timestamps:true
})
const Category = model("categories", newSchema)
module.exports = Category