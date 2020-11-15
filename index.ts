import express from 'express';
import cors from 'cors';

import { usuariosRouter } from "./routes/usuarios.router";

const app = express();
app.use(cors());
app.use(express.json());


app.use("/users", usuariosRouter);


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
