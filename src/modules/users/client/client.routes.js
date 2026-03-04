const express = require("express");
const clientRouter = express.Router();
const controller = require("./client.controller");
const { verifyClientToken } = require("../../../middlewares/auth");
const {upload} = require("../../../middlewares/upload")

clientRouter.post("/create-user", verifyClientToken, controller.createUser);
clientRouter.put("/update-user/:uuid", verifyClientToken, controller.updateUser);
clientRouter.delete("/delete-user/:uuid", verifyClientToken, controller.deleteUser);
clientRouter.put("/update-company/:uuid", verifyClientToken, upload.single("logo"), controller.updateCompany)

module.exports = clientRouter;