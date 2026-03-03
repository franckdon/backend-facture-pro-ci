const env = require("./src/configs/env");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cron = require("node-cron");
const licenseController = require("./src/modules/licenses/licenses.controller");
const { development } = env.port;
const prisma = require("./src/libs/master");

const apiRoutes = require("./src/routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);
app.use(helmet({ contentSecurityPolicy: false }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

cron.schedule("0 0 * * *", () => {
  console.log("--- Lancement de la vérification nocturne des licences ---");
  licenseController.checkAndDeactivateExpiredLicenses();
});

app.use("/api", apiRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API Facture-Pro-CI fonctionne correctement",
    timestamp: new Date(),
  });
});

app.get("/status", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.send(`
      <html>
        <head>
          <title>Status API</title>
          <style>
            body { font-family: Arial; text-align: center; margin-top: 100px; }
            .ok { color: green; font-size: 24px; }
            .box { border: 1px solid #ddd; padding: 30px; width: 400px; margin: auto; border-radius: 10px; }
          </style>
        </head>
        <body>
          <div class="box">
            <h2>Facture-Pro-CI Backend</h2>
            <p class="ok">✅ Base de données connectée</p>
            <p>Uptime: ${process.uptime().toFixed(0)} secondes</p>
            <p>Date: ${new Date().toLocaleString()}</p>
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    res.send(`
      <html>
        <head>
          <title>Status API</title>
          <style>
            body { font-family: Arial; text-align: center; margin-top: 100px; }
            .error { color: red; font-size: 24px; }
            .box { border: 1px solid #ddd; padding: 30px; width: 400px; margin: auto; border-radius: 10px; }
          </style>
        </head>
        <body>
          <div class="box">
            <h2>Facture-Pro-CI Backend</h2>
            <p class="error">❌ Erreur connexion Base de données</p>
            <p>${error.message}</p>
          </div>
        </body>
      </html>
    `);
  }
});

app.listen(development, () => {
  console.log(`Serveur démarré sur le port ${development}`);
});
