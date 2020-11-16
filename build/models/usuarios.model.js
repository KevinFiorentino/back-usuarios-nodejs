"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.insertOneUser = exports.findOneUser = exports.findAllUsers = void 0;
const database_1 = require("../config/database");
function findAllUsers() {
    return new Promise((resolve, reject) => {
        database_1.connection.query('SELECT * FROM usuario;', function (error, results) {
            if (error)
                reject(error);
            resolve(results);
        });
    });
}
exports.findAllUsers = findAllUsers;
function findOneUser(id) {
    return new Promise((resolve, reject) => {
        database_1.connection.query(`SELECT * FROM usuario WHERE usuario.id = ${id};`, function (error, result) {
            if (error)
                reject(error);
            resolve(result[0]);
        });
    });
}
exports.findOneUser = findOneUser;
function insertOneUser(user) {
    return new Promise((resolve, reject) => {
        database_1.connection.query(`INSERT INTO usuario SET ?`, user, (error) => {
            if (error)
                reject(error);
            database_1.connection.query(`SELECT * FROM usuario WHERE id = (SELECT MAX(id) FROM usuario);`, (error, result) => {
                if (error)
                    reject(error);
                resolve(result[0]);
            });
        });
    });
}
exports.insertOneUser = insertOneUser;
function updateUser(id, user) {
    return new Promise((resolve, reject) => {
        database_1.connection.query('UPDATE usuario SET name = ?, lastname = ?, email = ? WHERE id = ?', [user.name, user.lastname, user.email, id], function (error, results) {
            return __awaiter(this, void 0, void 0, function* () {
                if (error)
                    reject(error);
                let userUpdate = yield findOneUser(id);
                resolve(userUpdate);
            });
        });
    });
}
exports.updateUser = updateUser;
function deleteUser(id) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        const user = yield findOneUser(id);
        if (user) {
            database_1.connection.query(`DELETE FROM usuario WHERE id = ${id};`, function (error, results) {
                if (error)
                    reject(error);
                resolve(user);
            });
        }
    }));
}
exports.deleteUser = deleteUser;
