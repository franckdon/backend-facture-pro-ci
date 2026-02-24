const express = require('express')
const authAdminRouter = express.Router()
const controller = require('.authAdmin.controller')

authAdminRouter.post("/admin/login", controller.loginAdmin)
authAdminRouter.post("/admin/password/forgot-password", controller.forgotPasswordAdmin)
authAdminRouter.post("/admin/password/reset-password", controller.resetPasswordAdmin)
authAdminRouter.post("/admin/register", controller.registerAdminStep1)
authAdminRouter.post("/admin/confirm-register", controller.registerAdminStep2)

authAdminRouter.post(
    "/admin/impersonate-client", 
    verifyAdminToken,
    impersonationController.impersonateClient
);

module.exports = authAdminRouter