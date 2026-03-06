const express = require("express");
const planRouter = express.Router();
const controller = require("./plan.controller");
const { verifyAdminToken } = require("../../middlewares/auth");

planRouter.get("/", controller.getAllPlans);
planRouter.post("/setup-plans", verifyAdminToken, controller.setupDefaultPlans);
planRouter.post("/create-plan", verifyAdminToken, controller.createPlan);
planRouter.put("/update-plan/:uuid", verifyAdminToken, controller.updatePlan);
planRouter.delete("/delete-plan/:uuid", verifyAdminToken, controller.deletePlan);

module.exports = planRouter;