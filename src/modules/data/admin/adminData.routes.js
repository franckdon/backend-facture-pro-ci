const express = require("express");
const adminDataRouter = express.Router();
const controller = require("./adminData.controller");
const { verifyAdminToken} = require("../../../middlewares/auth");

adminDataRouter.get("/admin-dashboard-data", verifyAdminToken, controller.getAdminDashboardData);
adminDataRouter.get("/companies-full-data", verifyAdminToken, controller.getCompaniesFullData);


module.exports = adminDataRouter;
