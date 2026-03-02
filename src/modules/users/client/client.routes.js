const express = require("express");
const clientRouter = express.Router();
const controller = require("./client.controller");
const { verifyClientToken } = require("../../../middlewares/auth");

clientRouter.post("/create-user", verifyClientToken, controller.createUser);
clientRouter.put("/update-user/:uuid", verifyClientToken, controller.updateUser);
clientRouter.delete("/delete-user/:uuid", verifyClientToken, controller.deleteUser);
clientRouter.put("/update-compny/:uuid", verifyClientToken, controller.updateSociete)

module.exports = clientRouter;