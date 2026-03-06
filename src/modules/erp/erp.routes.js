const express = require("express");
const manageERPRouter = express.Router();
const controller = require("./erp.controller");
const { verifyClientToken } = require("../../middlewares/auth");

manageERPRouter.post("/create-invoice", verifyClientToken, controller.storeFullInvoice);
manageERPRouter.post("/store-full", controller.storeFullInvoice);
manageERPRouter.post("/create-refund", controller.storeRefundInvoice);
manageERPRouter.post("/delete-invoice", controller.deleteInvoice);
manageERPRouter.post("/create-tiers", controller.upsertTiers);
manageERPRouter.get("/certified", controller.getCertifiedInvoices);

module.exports = manageERPRouter;