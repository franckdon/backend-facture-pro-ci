const express = require("express");
const dataRouter = express.Router();
const controller = require("./data.controller");
const { verifyAdminToken } = require("../../../middlewares/auth");

dataRouter.get("/admin-dashboard-data", verifyAdminToken, controller.getAdminDashboardData);
dataRouter.get("/companies-full-data", verifyAdminToken, controller.getCompaniesFullData);
dataRouter.get("/tenant-dashboard-data", verifyAdminToken, controller.getTenantDashboardData);

module.exports = dataRouter;
