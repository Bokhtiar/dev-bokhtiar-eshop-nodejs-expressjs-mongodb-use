const userRoute = require('express').Router()
const userController = require('../../controllers/user/user.cntroller')

userRoute.get('/', userController.Index);
userRoute.post('/', userController.Register);
userRoute.post('/login', userController.Login);

module.exports = userRoute