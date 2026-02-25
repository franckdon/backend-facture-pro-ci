const express = require("express");
const manageERPRouter = express.Router();
const controller = require("./erp.controller");

manageERPRouter.post("/create-invoice", controller.storeFullInvoice);
manageERPRouter.post("/create-refund", controller.storeRefundInvoice);
manageERPRouter.post("/delete-invoice", controller.deleteInvoice);
manageERPRouter.post("/create-tiers", controller.upsertTiers);
manageERPRouter.get("/certified", controller.getCertifiedInvoices);

module.exports = manageERPRouter;