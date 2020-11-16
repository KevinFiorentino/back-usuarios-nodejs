const mysql = require('mysql')

const host = process.env.DATABASE_URL || 'localhost';
const database = process.env.DATABASE_NAME || 'back_usuarios_nodejs';
const user = process.env.DATABASE_USER || 'root';
const password = process.env.DATABASE_PASSWORD || '';

export const connection = mysql.createConnection({
  host,
  database,
  user,
  password
});
