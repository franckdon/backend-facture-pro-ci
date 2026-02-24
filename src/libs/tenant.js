require("dotenv");
const { PrismaClient: TenantClient } = require("../generated/tenant");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");

const tenantCache = {};

exports.getTenantClient = (societeData) => {
  const { bd_name, bd_host, bd_user, bd_pass, bd_port } = societeData;

  const cacheKey = `${bd_host}:${bd_name}`;

  if (tenantCache[cacheKey]) {
    return tenantCache[cacheKey];
  }

  const adapter = new PrismaMariaDb({
    host: bd_host || 'localhost',
    user: bd_user,
    password: bd_pass,
    database: bd_name,
    port: bd_port || 3306,
    connectionLimit: 3, 
  });

  const prisma = new TenantClient({ adapter });

  tenantCache[cacheKey] = prisma;
  return prisma;
};