import { connection } from '../config/database';

export interface Usuario {
  id: number;
  name: string;
  lastname: string;
  email: string;
  image: string;
}

export function findAllUsers(): Promise<Usuario[]> {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM usuario;', function (error: any, results: Usuario[]) {
      if (error) reject(error);
      resolve(results);
    });
  });
}

export function findOneUser(id: number): Promise<Usuario> {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM usuario WHERE usuario.id = ${id};`, function (error: any, result: Usuario) {
      if (error) reject(error);
      resolve(result[0]);
    });
  });
}

export function insertOneUser(user: Partial<Usuario>): Promise<Usuario> {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO usuario SET ?`, user,
      (error: any) => {
        if (error) reject(error);

        connection.query(`SELECT * FROM usuario WHERE id = (SELECT MAX(id) FROM usuario);`,
          (error: any, result: Usuario) => {
            if (error) reject(error);
            resolve(result[0]);
        });
    });
  });
}

export function updateUser(id: number, user: Partial<Usuario>): Promise<Usuario> {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE usuario SET name = ?, lastname = ?, email = ? WHERE id = ?', [user.name, user.lastname, user.email, id], 
      async function (error: any, results: Usuario) {
        if (error) reject(error);
        
        let userUpdate = await findOneUser(id);
        resolve(userUpdate);
    });
  });
}

export function deleteUser(id: number): Promise<Usuario> {
  return new Promise(async (resolve, reject) => {

    const user = await findOneUser(id);

    if (user) {
      connection.query(`DELETE FROM usuario WHERE id = ${id};`, function (error: any, results: Usuario) {
        if (error) reject(error);
        resolve(user);
      });
    }
  });
}
