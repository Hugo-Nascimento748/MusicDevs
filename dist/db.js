"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
exports.conectarBanco = conectarBanco;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: "aluno",
    host: "localhost",
    database: "postgres",
    password: "102030",
    port: 5432,
});
async function conectarBanco() {
    try {
        await exports.pool.connect();
        console.log("Conectado ao banco de dados!");
    }
    catch (erro) {
        console.error("Erro ao conectar no banco:", erro);
    }
}
