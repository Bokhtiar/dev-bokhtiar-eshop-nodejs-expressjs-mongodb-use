const appRouter = require('express').Router()
const userRoute = require('./user/user.route')

appRouter.use('/user', userRoute)

module.exports = appRouter