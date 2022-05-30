const User = require('../models/users.model')

/* Register */
const Register = async (req, res, next) => {
    
}
/* User List */
const Index = async (req, res, next) => {
    try {
        res.status(200).json({
            status:true,
            message: "List Of Users",
        })
    } catch (error) {
        console.log('errors', error)
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