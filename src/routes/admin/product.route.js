const adminProductRoute = require('express').Router()
const ProductController = require('../../controllers/admin/product.controller')

    adminProductRoute.get('/', ProductController.Index)
    adminProductRoute.post('/', ProductController.Store)
    adminProductRoute.get('/:id', ProductController.Show)
    adminProductRoute.put('/:id', ProductController.Update)
    adminProductRoute.delete('/:id', ProductController.Destroy)

module.exports = adminProductRoute
