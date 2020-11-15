import { connection } from '../config/database';

export interface Usuario {
    id: number;
    name: string;
    lastname: string;
    email: string;
    image: string;
}

export function findAllUsers(): Promise<Usuario[]> {
    return new Promise( (resolve, reject) => {
        connection.query('SELECT * FROM usuario;', function (error: any, results: Usuario[]) {
            if (error) reject(error);
            resolve(results);
        }); 
    });
}

export function findOneUser(id: number): Promise<Usuario> {
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM usuario WHERE usuario.id = ${id};`, function (error: any, result: Usuario) {
            if (error) reject(error);
            resolve(result);
        });
    });
}

export function insertOneUser(user: Partial<Usuario>): Promise<Usuario> {
    return new Promise( (resolve, reject) => {
        connection.query(`INSERT INTO usuario SET ?`, user, 
        function (error: any, result: Usuario) {
            if (error) reject(error);
            resolve(result);
        });
    });
}