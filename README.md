# BackUsuariosNodeJS

### INSTALL

#### MySQL

- Crear Base de Datos limpia en local
    - mysql -u root -p
    - CREATE DATABASE back_usuarios_nodejs;
- Dump de la BB.DD.
    - cd databases
    - mysql -u root -p back_usuarios_nodejs < dump_usuarios.sql
- Editar la configuración de la BB.DD en config/database.ts

#### NodeJS

- npm install
- npm run build
- node build/index.js
- localhost:3000/users
