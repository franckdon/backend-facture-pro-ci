const express = require("express");
const manageCompaniesRouter = express.Router();
const controller = require("./companies.controller");
const { verifyAdminToken } = require("../../../middlewares/auth");

manageCompaniesRouter.post("/admin/create-company", verifyAdminToken, controller.createCompany);
manageCompaniesRouter.post("/admin/delete-company/:uuid", verifyAdminToken, controller.deleteCompany);
manageCompaniesRouter.post("/admin/update-production-status", verifyAdminToken, controller.updateCompanyStatusProduction);
manageCompaniesRouter.put("/admin/update-company/:uuid", verifyAdminToken, controller.updateCompany);

module.exports = manageCompaniesRouter;
