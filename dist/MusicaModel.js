"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarTodasMusicas = listarTodasMusicas;
exports.inserirMusica = inserirMusica;
exports.buscarMusicas = buscarMusicas;
async function listarTodasMusicas() {
    const query = `SELECT * FROM musica;`;
    const resultado = await db_1.pool.query(query);
    return resultado.rows;
}
const db_1 = require("./db");
async function inserirMusica(musica) {
    const query = `
    INSERT INTO MUSICA (NOME, BANDA, PRODUTORA)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
    const valores = [musica.nome, musica.banda, musica.produtora];
    const resultado = await db_1.pool.query(query, valores);
    return resultado.rows[0];
}
async function buscarMusicas(termo) {
    const query = `
    SELECT * FROM musica
    WHERE nome ILIKE $1 OR banda ILIKE $2 OR produtora ILIKE $3;
  `;
    const resultado = await db_1.pool.query(query, [`%${termo}%`, `%${termo}%`, `%${termo}%`]);
    return resultado.rows;
}
