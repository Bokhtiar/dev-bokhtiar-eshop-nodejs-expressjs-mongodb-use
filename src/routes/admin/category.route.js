const adminCategory = require('express').Router()
const CategoryController = require('../../controllers/admin/category.controller')

adminCategory.get('/', CategoryController.Index);
adminCategory.get('/status/:id', CategoryController.Status);
adminCategory.post('/', CategoryController.Store);
adminCategory.get('/:id', CategoryController.Show);
adminCategory.put('/:id', CategoryController.Update);
adminCategory.delete('/:id', CategoryController.Destroy);

module.exports = adminCategory
