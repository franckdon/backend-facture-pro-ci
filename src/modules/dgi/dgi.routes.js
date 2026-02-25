const express = require("express");
const manageDGIRouter = express.Router();
const controller = require("./dgi.controller");
const { verifyClientToken } = require("../../middlewares/auth");

manageDGIRouter.post("/certification/invoice", verifyClientToken, controller.certifyInvoice);
manageDGIRouter.post("/certification/refund", verifyClientToken, controller.refundInvoice);



module.exports = manageDGIRouter;