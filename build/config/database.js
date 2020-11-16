"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql = require('mysql');
const host = process.env.DATABASE_URL || 'localhost';
const database = process.env.DATABASE_NAME || 'back_usuarios_nodejs';
const user = process.env.DATABASE_USER || 'root';
const password = process.env.DATABASE_PASSWORD || '';
exports.connection = mysql.createConnection({
    host,
    database,
    user,
    password
});
