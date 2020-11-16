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
exports.delUser = exports.putUser = exports.postUser = exports.getUser = exports.getAllUsers = void 0;
const usuarios_model_1 = require("../models/usuarios.model");
exports.getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuarios_model_1.findAllUsers();
        res.status(200).send(usuarios);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const usuario = yield usuarios_model_1.findOneUser(id);
        res.status(200).send(usuario);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const usuario = yield usuarios_model_1.insertOneUser(user);
        res.status(200).send(usuario);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const user = req.body;
        const usuario = yield usuarios_model_1.updateUser(id, user);
        res.status(200).send(usuario);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.delUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const userDel = yield usuarios_model_1.deleteUser(id);
        res.status(200).send(userDel);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
