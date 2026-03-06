const express = require("express");
const masterDataRouter = express.Router();
const controller = require("./masterData.controller");
const { verifyClientToken } = require("../../middlewares/auth");

masterDataRouter.get("/tax-rates", controller.getAllTaxRates);
masterDataRouter.get("/payment-modes", verifyClientToken, controller.getAllPaymentModes);
masterDataRouter.get("/currencies", verifyClientToken, controller.getAllCurrencies);
masterDataRouter.get("/invoice-types", controller.getAllInvoiceTypes);
masterDataRouter.get("/billing-types", verifyClientToken, controller.getAllBillingTypes);




module.exports = masterDataRouter;