const express = require("express");
const organizationRouter = express.Router();
const controller = require("./organization.controller");
const { verifyClientToken } = require("../../middlewares/auth");

organizationRouter.post("/create-etablishment", verifyClientToken, controller.createEstablishment);
organizationRouter.post("/create-point-of-sale", verifyClientToken, controller.createPointOfSale);
organizationRouter.put("/update-etablishment/:uuid", verifyClientToken, controller.updateEstablishment);
organizationRouter.put("/update-point-of-sale/:uuid", verifyClientToken, controller.updatePointOfSale);
organizationRouter.delete("/delete-etablishment/:uuid", verifyClientToken, controller.deleteEstablishment);
organizationRouter.delete("/delete-point-of-sale/:uuid", verifyClientToken, controller.deletePointOfSale);

module.exports = organizationRouter;
