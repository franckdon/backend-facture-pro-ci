const express = require("express");
const router = express.Router();

const adminRouter = express.Router();
adminRouter.use("/auth", require("../modules/auth/admin/authAdmin.routes"));
adminRouter.use("/companies", require("../modules/companies/companies.routes"));
adminRouter.use("/data", require("../modules/data/admin/adminData.routes"));
adminRouter.use("/faqs",require("../modules/faqs/adminFaqs.routes"))
adminRouter.use("/master-data",require("../modules/masterData/adminMasterData.routes"))
adminRouter.use("/plans",require("../modules/plan/adminPlan.routes"))
adminRouter.use("/products",require("../modules/products/adminProducts.routes"))
adminRouter.use("/roles",require("../modules/roles/adminRoles.routes"))
adminRouter.use("/status",require("../modules/status/adminStatus.routes"))
adminRouter.use("/users",require("../modules/users/admin/admin.routes"))


const clientRouter = express.Router();
clientRouter.use("/auth", require("../modules/auth/client/authClient.routes"));
clientRouter.use("/data", require("../modules/data/client/clientData.routes"));
clientRouter.use("/dgi", require("../modules/dgi/dgi.routes"));
clientRouter.use("/export", require("../modules/export/export.routes"));
clientRouter.use("/import", require("../modules/import/import.routes"));
clientRouter.use("/data", require("../modules/data/client/clientData.routes"));
clientRouter.use("/master-data", require("../modules/masterData/clientMasterData.routes"));
clientRouter.use("/organization", require("../modules/organization/organization.routes"));
clientRouter.use("/plans",require("../modules/plan/clientPlan.routes"))
clientRouter.use("/products",require("../modules/products/clientProducts.routes"))
clientRouter.use("/roles",require("../modules/roles/clientRoles.routes"))
clientRouter.use("/status",require("../modules/status/clientStatus.routes"))
clientRouter.use("/users",require("../modules/users/client/client.routes"))

const erpRouter = express.Router();
erpRouter.use("/", require("../modules/erp/erp.routes"));

router.use("/admin", adminRouter);
router.use("/client", clientRouter);
router.use("/erp", erpRouter);

module.exports = router;