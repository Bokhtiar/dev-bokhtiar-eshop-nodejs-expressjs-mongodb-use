const CategoryRoute = require('express').Router()
const CategoryController = require('../../controllers/category.controller')

CategoryRoute.get('/', CategoryController.Index);

module.exports = CategoryRoute
