const express = require("express");
const statutRouter = express.Router();
const controller = require("./status.controller");
const { verifyAdminToken } = require("../../middlewares/auth");

statutRouter.get("/", verifyAdminToken, controller.getAllStatuses);
statutRouter.post("/setup-statuts", verifyAdminToken, controller.setupDefaultStatuses);

module.exports = statutRouter;