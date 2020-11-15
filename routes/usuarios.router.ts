import express from 'express';
import { getAllUsers, getUser, postUser, putUser, deleteUser } from '../controllers/usuarios.controller';

export const usuariosRouter = express.Router();

usuariosRouter.get("/", getAllUsers);
usuariosRouter.get("/:id", getUser);
usuariosRouter.post("/", postUser);
usuariosRouter.put("/:id", putUser);
usuariosRouter.delete("/:id", deleteUser);
