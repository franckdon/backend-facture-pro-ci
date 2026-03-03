const env = require("./src/configs/env");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cron = require('node-cron');
const licenseController = require('./src/modules/licenses/licenses.controller');
const { development } = env.port;

const apiRoutes = require("./src/routes/index"); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
}));
app.use(helmet({ contentSecurityPolicy: false }));

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

cron.schedule('0 0 * * *', () => {
  console.log('--- Lancement de la vérification nocturne des licences ---');
  licenseController.checkAndDeactivateExpiredLicenses();
});

app.use("/api", apiRoutes);

app.listen(development, () => {
    console.log(`Serveur démarré sur le port ${development}`);
});