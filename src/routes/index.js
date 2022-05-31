const appRouter = require('express').Router()
const userRoute = require('./user/user.route')
const CategoryRoute = require('./user/category.route')
const adminRoute = require('./admin/admin.route')

appRouter.use('/admin', adminRoute)

appRouter.use('/user', userRoute)
appRouter.use('/category', CategoryRoute)

module.exports = appRouter