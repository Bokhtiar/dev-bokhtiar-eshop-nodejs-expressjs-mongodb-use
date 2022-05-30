const User = require('../models/users.model')
const bcrypt = require("bcryptjs")

/* Register */
const Register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        /* exist email checking */
        const isEmailExist = await User.findOne({ email })
        if (isEmailExist) {
            return res.status(409).json({
                status: false,
                errors: { message: "E-mail already exist." }
            })
        }

        /* Hash password */
        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            email, 
            password: hashPassword
        })
        await newUser.save()

        res.status(200).json({
            status: true,
            message: "added Successfully"
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}
/* User List */
const Index = async (req, res, next) => {
    try {
        const results = await User.find()
        res.status(200).json({
            status: true,
            data: results,
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}
/* Register */

/* Register */

/* Register */

module.exports = {
    Register,
    Index
}