const express = require("express");
const masterDataRouter = express.Router();
const controller = require("./masterData.controller");
const { verifyAdminToken, verifyClientToken } = require("../../middlewares/auth");

masterDataRouter.post("/setup-master-data", verifyAdminToken, controller.setupMasterData);
masterDataRouter.get("/tax-rates", verifyClientToken, controller.getAllTaxRates);
masterDataRouter.get("/payment-modes", verifyClientToken, controller.getAllPaymentModes);
masterDataRouter.get("/currencies", verifyClientToken, controller.getAllCurrencies);
masterDataRouter.get("/invoice-types", controller.getAllInvoiceTypes);
masterDataRouter.get("/billing-types", verifyClientToken, controller.getAllBillingTypes);
masterDataRouter.post("/create-tax-rate", verifyAdminToken, controller.createTaxRate);
masterDataRouter.post("/create-payment-mode", verifyAdminToken, controller.createPaymentMode);
masterDataRouter.post("/create-currency", verifyAdminToken, controller.createCurrency);
masterDataRouter.post("/create-billing-type", verifyAdminToken, controller.createBillingType);
masterDataRouter.post("/create-invoice-type", verifyAdminToken, controller.createInvoiceType);

masterDataRouter.put("/update-tax-rate/:uuid", verifyAdminToken, controller.updateTaxRate);
masterDataRouter.put("/update-payment-mode/:uuid", verifyAdminToken, controller.updatePaymentMode);
masterDataRouter.put("/update-currency/:uuid", verifyAdminToken, controller.updateCurrency);
masterDataRouter.put("/update-billing-type/:uuid", verifyAdminToken, controller.updateBillingType);
masterDataRouter.put("/update-invoice-type/:uuid", verifyAdminToken, controller.updateInvoiceType);

masterDataRouter.delete("/delete-tax-rate/:uuid", verifyAdminToken, controller.deleteTaxRate);
masterDataRouter.delete("/delete-payment-mode/:uuid", verifyAdminToken, controller.deletePaymentMode);
masterDataRouter.delete("/delete-currency/:uuid", verifyAdminToken, controller.deleteCurrency);
masterDataRouter.delete("/delete-billing-type/:uuid", verifyAdminToken, controller.deleteBillingType);
masterDataRouter.delete("/delete-invoice-type/:uuid", verifyAdminToken, controller.deleteInvoiceType);





module.exports = masterDataRouter;