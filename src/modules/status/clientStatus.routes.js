const express = require("express");
const statutRouter = express.Router();
const controller = require("./status.controller");
const { verifyClientToken } = require("../../middlewares/auth");

statutRouter.get("/", verifyClientToken, controller.getAllStatuses);

module.exports = statutRouter;