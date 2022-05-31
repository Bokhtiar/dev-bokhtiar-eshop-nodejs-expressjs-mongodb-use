const User = require('../models/users.model')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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

/* Login */
const Login = async (req, res, next) => {
    try {
        const {
            email,
            password
        } = req.body

        /* email valid checking */
        const account = await User.findOne({ email })
        if (!account) {
            res.status(404).json({
                status: false,
                message: "Invalid email...!"
            })
        }

        /* Compare with password */
        const result = await bcrypt.compare(password, account.password)
        if (!result) {
            return res.status(404).json({
                status: false,
                message: "Invalid password...!"
            })
        }

        /* Generate JWT token */
        const token = await jwt.sign(
            {
                id: account._id,
                name: account.name,
                role: account.role,
                permissions: account.permissions,
            }, process.env.JWT_SECRET, { expiresIn: '1d' }
        )

        return res.status(200).json({
            status: true,
            token
        })

    } catch (error) {
        console.log(error)
        next(error)
    }
}
/* Register */

/* Register */

module.exports = {
    Register,
    Index,
    Login
}