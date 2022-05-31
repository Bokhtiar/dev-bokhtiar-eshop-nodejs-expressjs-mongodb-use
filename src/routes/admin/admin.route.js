const adminRoute = require('express').Router()
const adminController = require('../../controllers/admin/admin.controller')

adminRoute.get('/', adminController.Index);
adminRoute.post('/', adminController.Register);
adminRoute.post('/login', adminController.Login);

module.exports = adminRoute