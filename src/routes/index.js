const appRouter = require('express').Router()
const userRoute = require('./user/user.route')
const CategoryRoute = require('./user/category.route')
const adminRoute = require('./admin/admin.route')
const permission = require('../middleware/permission.middleware')
const adminCategory = require('../routes/admin/category.route')
const adminProductRoute = require('../routes/admin/product.route')

appRouter.use('/admin', adminRoute)
appRouter.use('/admin/category', permission.isAdmin, adminCategory)
appRouter.use('/admin/product', permission.isAdmin, adminProductRoute)



appRouter.use('/user', userRoute)
appRouter.use('/category', CategoryRoute)

module.exports = appRouter