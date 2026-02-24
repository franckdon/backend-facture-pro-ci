const express = require("express");
const statutRouter = express.Router();
const controller = require("./status.controller");
const { verifyAdminToken, verifyClientToken } = require("../../../middlewares/auth");

statutRouter.get("/statuts", verifyClientToken, controller.getAllStatuses);
statutRouter.post("/setup-statuts", verifyAdminToken, controller.setupDefaultStatuses);

module.exports = statutRouter;