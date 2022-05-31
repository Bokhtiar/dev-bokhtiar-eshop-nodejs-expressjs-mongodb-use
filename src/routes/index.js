const appRouter = require('express').Router()
const userRoute = require('./user/user.route')
const CategoryRoute = require('./user/category.route')

appRouter.use('/user', userRoute)
appRouter.use('/category', CategoryRoute)

module.exports = appRouter