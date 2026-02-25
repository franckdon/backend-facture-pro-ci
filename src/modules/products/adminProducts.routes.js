const express = require("express");
const productsRouter = express.Router();
const controller = require("./products.controller");
const { verifyAdminToken } = require("../../middlewares/auth");

productsRouter.get("/", verifyAdminToken, controller.getAllProducts)


module.exports =productsRouter