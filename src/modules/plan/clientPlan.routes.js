const express = require("express");
const planRouter = express.Router();
const controller = require("./plan.controller");
const { verifyClientToken } = require("../../middlewares/auth");

planRouter.get("/", verifyClientToken, controller.getAllPlans);

module.exports = planRouter;