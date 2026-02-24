require('dotenv')
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
const { PrismaClient: MasterClient } = require('../generated/master');

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST_ADMIN,
  user: process.env.DB_USER_ADMIN,
  password: process.env.DB_PASSWORD_ADMIN,
  database: process.env.DB_NAME_ADMIN,
  connectionLimit: 5
});
const prisma = new MasterClient({ adapter });

module.exports = prisma;