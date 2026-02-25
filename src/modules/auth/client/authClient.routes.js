const express = require('express')
const authClientRouter = express.Router()
const controller = require('./authClient.controller')


authClientRouter.post("/client/login", controller.loginClient)
authClientRouter.post("/client/password/forgot-password", controller.forgotPasswordClient)
authClientRouter.post("/client/password/reset-password", controller.resetPasswordClient)

module.exports = authClientRouter