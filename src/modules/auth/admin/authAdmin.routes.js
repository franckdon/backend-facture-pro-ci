const express = require('express')
const authAdminRouter = express.Router()
const controller = require('./authAdmin.controller')
const {verifyAdminToken} = require('../../../middlewares/auth')

authAdminRouter.post("/login", controller.loginAdmin)
authAdminRouter.post("/password/forgot-password", controller.forgotPasswordAdmin)
authAdminRouter.post("/password/reset-password", controller.resetPasswordAdmin)
authAdminRouter.post("/register", controller.registerAdminStep1)
authAdminRouter.post("/confirm-register", controller.registerAdminStep2)

authAdminRouter.post(
    "/impersonate-client", 
    verifyAdminToken,
    controller.impersonateClient
);

module.exports = authAdminRouter