const express = require("express");
const manageCompaniesRouter = express.Router();
const controller = require("./companies.controller");
const { verifyAdminToken } = require("../../middlewares/auth");

manageCompaniesRouter.post("/create-company", verifyAdminToken, controller.createCompany);
manageCompaniesRouter.post("/delete-company/:uuid", verifyAdminToken, controller.deleteCompany);
manageCompaniesRouter.post("/update-production-status", verifyAdminToken, controller.updateCompanyStatusProduction);
manageCompaniesRouter.put("/update-company/:uuid", verifyAdminToken, controller.updateCompany);

module.exports = manageCompaniesRouter;
