import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: 'GET ALL USERS' });
    } catch (e) {
        res.status(404).send(e.message);
    }
}
