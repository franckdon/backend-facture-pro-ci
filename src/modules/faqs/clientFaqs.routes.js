const express = require("express");
const faqRouter = express.Router();
const faqController = require("./faqs.controller");

faqRouter.get("/", faqController.getAllFaqs);

module.exports = faqRouter;
