const express = require("express");
const licensesRouter = express.Router();
const controller = require("./licenses.controller");
const { verifyAdminToken } = require("../../middlewares/auth");

licensesRouter.post("/update-license-status", verifyAdminToken, controller.updateCompanyLicenseStatus);

module.exports = licensesRouter;
