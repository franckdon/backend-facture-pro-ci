const express = require("express");
const clientDataRouter = express.Router();
const controller = require("./clientData.controller");
const { verifyClientToken } = require("../../../middlewares/auth");

clientDataRouter.get("/tenant-fne-data", verifyClientToken, controller.getAllClientsFNEData);
clientDataRouter.get("/tenant-invoice-data", verifyClientToken, controller.getAllInvoicesData);
clientDataRouter.get("/tenant-company-data", verifyClientToken, controller.getCompanyClientFullData);

module.exports = clientDataRouter;
