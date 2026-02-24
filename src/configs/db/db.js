const mysqlModule = require('mysql2/promise'); 
require("dotenv").config();

const configAdmin = {
  host: process.env.DB_HOST_ADMIN || "localhost",
  user: process.env.DB_USER_ADMIN || "root",
  password: process.env.DB_PASSWORD_ADMIN || "rootyann@12345",
  database: process.env.DB_NAME_ADMIN || "fne_admin",
  port: parseInt(process.env.DB_PORT_ADMIN || "3306", 10),
  multipleStatements: true,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};

const adminPool = mysqlModule.createPool(configAdmin);

(async () => {
  try {
    const connection = await adminPool.getConnection();
    console.log("Pool MySQL connecté avec succès !");
    connection.release();
  } catch (err) {
    console.error("Erreur pool MySQL:", err.message);
  }
})();

module.exports = {
  mysql: mysqlModule, 
  adminPool: adminPool, 
  configAdmin,
};