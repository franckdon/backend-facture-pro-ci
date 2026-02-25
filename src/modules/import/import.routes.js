const express = require("express");
const multer = require("multer");
const path = require("path");
const importRouter = express.Router();
const { verifyClientToken } = require("../../middlewares/auth");
const fs = require("fs");
const controller = require("./import.controller");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "/src/importations");
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `invoice-import-${Date.now()}-${Math.round(Math.random() * 1e9)}.xlsx`,
    );
  },
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = [".xlsx", ".xls", ".xlsm"];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Format de fichier invalide. Seuls les fichiers Excel (.xlsx, .xls, .xlsm) sont acceptés.",
      ),
    );
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

importRouter.get("/download-template", controller.downloadImportTemplate);

importRouter.post("/import-invoice", verifyClientToken, upload.single("file"), controller.importInvoicesFromExcel);

const cleanOldFiles = () => {
  const dir = path.join(process.cwd(), "src/importations");
  const delay = 24 * 60 * 60 * 1000;

  if (!fs.existsSync(dir)) return;

  fs.readdir(dir, (err, files) => {
    if (err) return console.error("Erreur lecture dossier importations:", err);

    files.forEach((file) => {
      const filePath = path.join(dir, file);

      fs.stat(filePath, (err, stats) => {
        if (err) return console.error("Erreur stats fichier:", err);

        const now = Date.now();
        const fileAge = now - stats.mtimeMs;

        if (fileAge > delay) {
          fs.unlink(filePath, (err) => {
            if (err) console.error(`Erreur suppression ${file}:`, err);
            else console.log(`Fichier expiré supprimé : ${file}`);
          });
        }
      });
    });
  });
};

setInterval(cleanOldFiles, 3600 * 1000);

module.exports = importRouter;
