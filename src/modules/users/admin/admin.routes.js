const express = require("express");
const adminRouter = express.Router();
const controller = require("./admin.controller");
const { verifyAdminToken } = require("../../../middlewares/auth");

adminRouter.get("/admin-info", verifyAdminToken, controller.getAdminInfo);
adminRouter.post("/admin/create-user", verifyAdminToken, controller.createUser);
adminRouter.put("/admin/update-user/:uuid", verifyAdminToken, controller.updateUser);
adminRouter.delete("/admin/delete-user/:uuid", verifyAdminToken, controller.deleteUser);

module.exports = adminRouter;