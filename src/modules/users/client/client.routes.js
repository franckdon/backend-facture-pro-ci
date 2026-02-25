const express = require("express");
const clientRouter = express.Router();
const controller = require("./client.controller");
const { verifyClientToken } = require("../../../middlewares/auth");

clientRouter.post("/client/create-user", verifyClientToken, controller.createUser);
clientRouter.put("/client/update-user/:uuid", verifyClientToken, controller.updateUser);
clientRouter.delete("/client/delete-user/:uuid", verifyClientToken, controller.deleteUser);

module.exports = clientRouter;