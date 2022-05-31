const adminCategory = require('express').Router()
const CategoryController = require('../../controllers/admin/category.controller')

adminCategory.get('/', CategoryController.Index);
adminCategory.post('/', CategoryController.Store);

module.exports = adminCategory
