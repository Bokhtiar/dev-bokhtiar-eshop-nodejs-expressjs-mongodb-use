const userRoute = require('express').Router()
const userController = require('../../controllers/user.cntroller')

userRoute.get('/', userController.Index);
userRoute.post('/', userController.Register);
userRoute.post('/login', userController.Login);
// userRoute.get('/:id', userController.show)

module.exports = userRoute