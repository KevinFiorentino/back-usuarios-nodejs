import express from 'express';

import { getAllUsers } from '../controllers/usuarios.controller';

export const usuariosRouter = express.Router();

usuariosRouter.get("/", getAllUsers);
