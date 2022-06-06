const adminProductRoute = require('express').Router()
const ProductController = require('../../controllers/admin/product.controller')

    adminProductRoute.get('/', ProductController.Index)
    adminProductRoute.post('/', ProductController.Store)
    adminProductRoute.get('/:id', ProductController.Show)

module.exports = adminProductRoute
