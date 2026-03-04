const express = require("express");
const clientDataRouter = express.Router();
const controller = require("./clientData.controller");
const { verifyClientToken } = require("../../../middlewares/auth");

clientDataRouter.get("/tenant-data", verifyClientToken, controller.getAllClientsFNEData);
clientDataRouter.get("/tenant-invoice-data", verifyClientToken, controller.getAllInvoicesData);
clientDataRouter.get("/tenant-company-data", verifyClientToken, controller.getCompanyClientFullData);
clientDataRouter.get("/tiers", verifyClientToken, controller.getAllTiersData);

module.exports = clientDataRouter;
