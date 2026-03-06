const express = require("express");
const productsRouter = express.Router();
const controller = require("./products.controller");
const { verifyClientToken } = require("../../middlewares/auth");

productsRouter.get("/", verifyClientToken, controller.getAllProducts)
productsRouter.get("/product-types", verifyClientToken, controller.getProductTypes);
productsRouter.post("/create-product", verifyClientToken, controller.createProduct);
productsRouter.put("/update-product/:uuid", verifyClientToken, controller.updateProduct);
productsRouter.delete("/delete-product/:uuid", verifyClientToken, controller.deleteProduct);

module.exports =productsRouter