const { mysql, adminPool, configAdmin } = require("./db");

exports.queryAdmin = async (query, params = []) => {
  try {
    const sanitizedParams = params.map(p => p === undefined ? null : p);
    
    const [rows] = await adminPool.execute(query, sanitizedParams);
    return rows;
  } catch (err) {
    console.error("Erreur queryAdmin:", err.message);
    throw err;
  }
};


exports.executeAdminCommand = async (commandQuery) => {
  const upperQuery = commandQuery.toUpperCase().trim();

  const isAuthorized = 
    upperQuery.includes("CREATE DATABASE") || 
    upperQuery.includes("DROP DATABASE") ||
    upperQuery.includes("ALTER DATABASE");

  if (!isAuthorized) {
    throw new Error(
      "Sécurité: Commande non autorisée. Seules les opérations sur les bases de données sont permises."
    );
  }

  let connection;
  try {
    const masterConfig = { ...configAdmin, database: undefined }; 
    connection = await mysql.createConnection(masterConfig);
    
    const [result] = await connection.query(commandQuery); 
    return result;
  } catch (err) {
    console.error("Erreur commande admin:", err.message);
    throw err;
  } finally {
    if (connection) {
      await connection.end(); 
    }
  }
};


exports.executeClientCommand = async (dbName, commandQuery, params = []) => {
  const clientConfig = { ...configAdmin, database: dbName };
  let clientConnection;
  try {
    clientConnection = await mysql.createConnection(clientConfig);
    
    const [result] = await clientConnection.query(commandQuery, params);
    
    return result;
  } catch (err) {
    console.error(`Erreur sur BD client '${dbName}':`, err.message);
    throw err;
  } finally {
    if (clientConnection) {
      await clientConnection.end();
    }
  }
};