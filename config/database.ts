const mysql = require('mysql')

export const connection = mysql.createConnection({
    host     : 'localhost',
    database : 'back_usuarios_nodejs',
    user     : 'root',
    password : ''
});
 