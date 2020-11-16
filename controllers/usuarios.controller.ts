import { Request, Response } from 'express';
import { findAllUsers, findOneUser, insertOneUser, updateUser, deleteUser } from "../models/usuarios.model";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const usuarios = await findAllUsers();
    res.status(200).send(usuarios);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const usuario = await findOneUser(id);
    res.status(200).send(usuario);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

export const postUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const usuario = await insertOneUser(user);
    res.status(200).send(usuario);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

export const putUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = req.body;
    const usuario = await updateUser(id, user);
    res.status(200).send(usuario);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

export const delUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const userDel = await deleteUser(id);
    res.status(200).send(userDel);
  }
  catch (error) {
    res.status(500).send(error);
  }
}
