"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const usuarios_router_1 = require("./routes/usuarios.router");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.options('*', cors_1.default());
app.use(morgan_1.default('dev'));
app.use('/users', usuarios_router_1.usuariosRouter);
app.use('/kevin', (req, res) => {
    res.status(200).send({ message: 'Hello kevin!' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
