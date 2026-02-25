const express = require("express");
const pdfRouter = express.Router();
const controller = require("./export.controller");
const { verifyClientToken } = require("../../middlewares/auth");

pdfRouter.post("/generate-pdf", verifyClientToken, controller.generateInvoicePDF);

module.exports = pdfRouter;