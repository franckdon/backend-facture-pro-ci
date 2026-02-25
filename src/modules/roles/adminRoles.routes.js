const express = require("express");
const rolesRouter = express.Router();
const controller = require("./roles.controller");
const { verifyAdminToken } = require("../../middlewares/auth");

rolesRouter.get("/", verifyAdminToken, controller.getAllRoles);
rolesRouter.post("/setup-roles", verifyAdminToken, controller.setupDefaultRoles);
rolesRouter.post("/create-role", verifyAdminToken, controller.createRole);
rolesRouter.delete("/role/:uuid", verifyAdminToken, controller.deleteRole);

module.exports = rolesRouter;