import { Request, Response } from 'express';
import { Usuario, findAllUsers, findOneUser, insertOneUser } from "../models/usuarios.model";

export const getAllUsers = async (req: Request, res: Response) => {
  const usuarios = await findAllUsers();
  res.status(200).send(usuarios);
}

export const getUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const usuario = await findOneUser(id);
  res.status(200).send(usuario);
}

export const postUser = async (req: Request, res: Response) => {
  const user = req.body;
  const usuario = await insertOneUser(user);
  console.log(usuario);
}

export const putUser = (req: Request, res: Response) => {

}

export const deleteUser = (req: Request, res: Response) => {

}
