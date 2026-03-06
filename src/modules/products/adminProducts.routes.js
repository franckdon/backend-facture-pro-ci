const express = require("express");
const productsRouter = express.Router();
const controller = require("./products.controller");
const { verifyAdminToken } = require("../../middlewares/auth");

productsRouter.get("/", verifyAdminToken, controller.getAllProducts)
productsRouter.post("/setup-products", verifyAdminToken, controller.setupDefaultTypesOfProduct);


module.exports =productsRouter