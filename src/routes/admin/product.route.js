const adminProductRoute = require('express').Router()
const ProductController = require('../../controllers/admin/product.controller')

    adminProductRoute.post('/', ProductController.Store)

module.exports = adminProductRoute
