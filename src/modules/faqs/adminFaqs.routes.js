const express = require("express");
const faqRouter = express.Router();
const faqController = require("./faqs.controller");
const { verifyAdminToken } = require("../../middlewares/auth");

faqRouter.get("/", faqController.getAllFaqs);
faqRouter.post("/create-faq", verifyAdminToken, faqController.createFaq);
faqRouter.put("/update-faq/:uuid", verifyAdminToken, faqController.updateFaq);
faqRouter.delete("/delete-faq/:uuid", verifyAdminToken, faqController.deleteFaq);

module.exports = faqRouter;
