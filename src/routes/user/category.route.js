const CategoryRoute = require('express').Router()
const CategoryController = require('../../controllers/user/category.controller')

CategoryRoute.get('/', CategoryController.Index);

module.exports = CategoryRoute
