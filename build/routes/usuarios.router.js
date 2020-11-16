"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosRouter = void 0;
const express_1 = __importDefault(require("express"));
const usuarios_controller_1 = require("../controllers/usuarios.controller");
exports.usuariosRouter = express_1.default.Router();
exports.usuariosRouter.get("/", usuarios_controller_1.getAllUsers);
exports.usuariosRouter.get("/:id", usuarios_controller_1.getUser);
exports.usuariosRouter.post("/", usuarios_controller_1.postUser);
exports.usuariosRouter.put("/:id", usuarios_controller_1.putUser);
exports.usuariosRouter.delete("/:id", usuarios_controller_1.delUser);
