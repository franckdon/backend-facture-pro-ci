const express = require("express");
const rolesRouter = express.Router();
const controller = require("./roles.controller");
const { verifyClientToken } = require("../../middlewares/auth");

rolesRouter.get("/", controller.getAllRoles);

module.exports = rolesRouter;