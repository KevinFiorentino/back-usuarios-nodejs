# BackUsuariosNodeJS

## NodeJS + Express + Typescript + MySQL + Heroku

### INSTALL

#### MySQL

- Crear Base de Datos limpia en local
    - `mysql -u root -p`
    - `CREATE DATABASE back_usuarios_nodejs;`
- Dump de la BB.DD.
    - `cd databases`
    - `mysql -u root -p back_usuarios_nodejs < dump_usuarios.sql`
- Editar la configuración de la BB.DD en `config/database.ts`

#### NodeJS

- `npm install`
- `npm run build`
- `node build/index.js`
- localhost:3000/users

#### Deploy to Heroku

- Crear proyecto Heroku
    - `heroku login`
    - `heroku create {NAME_APP}`
    - `git push heroku master`
- Configurar addons de MySQL:
    - `heroku addons:create cleardb:ignite`
    - `heroku config | grep CLEARDB_DATABASE_URL`
    - Copiar el string de conexión y setear cada variable de entorno correspondiente
        - CLEARDB_DATABASE_URL: mysql://`{DATABASE_USER}`:`{DATABASE_PASSWORD}`@`{DATABASE_URL}`/`{DATABASE_NAME}`?reconnect=true
- Conectarse a la BB.DD.
    - `mysql --host={DATABASE_URL} --user={DATABASE_USER} --password={DATABASE_PASSWORD} --reconnect {DATABASE_NAME}`
    - Dump de la BB.DD.
