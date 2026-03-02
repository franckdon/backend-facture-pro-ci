const express = require("express");
const adminRouter = express.Router();
const controller = require("./admin.controller");
const { verifyAdminToken } = require("../../../middlewares/auth");

adminRouter.get("/me", verifyAdminToken, controller.getAdminInfo);
adminRouter.post("/create-user", verifyAdminToken, controller.createUser);
adminRouter.put("/update-user/:uuid", verifyAdminToken, controller.updateUser);
adminRouter.delete("/delete-user/:uuid", verifyAdminToken, controller.deleteUser);

module.exports = adminRouter;