const express = require('express')
const authClientRouter = express.Router()
const controller = require('./authClient.controller')


authClientRouter.post("/login", controller.loginClient)
authClientRouter.post("/password/forgot-password", controller.forgotPasswordClient)
authClientRouter.post("/password/reset-password", controller.resetPasswordClient)

module.exports = authClientRouter