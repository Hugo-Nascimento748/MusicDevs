export async function listarTodasMusicas() {
  const query = `SELECT * FROM musica;`;
  const resultado = await pool.query(query);
  return resultado.rows;
}
import { pool } from "./db";

export interface Musica {
  nome: string;
  banda: string;
  produtora: string;
}

export async function inserirMusica(musica: Musica) {
  const query = `
    INSERT INTO MUSICA (NOME, BANDA, PRODUTORA)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const valores = [musica.nome, musica.banda, musica.produtora];
  const resultado = await pool.query(query, valores);
  return resultado.rows[0];
}

export async function buscarMusicas(termo: string) {
  const query = `
    SELECT * FROM musica
    WHERE nome ILIKE $1 OR banda ILIKE $2 OR produtora ILIKE $3;
  `;
  const resultado = await pool.query(query, [`%${termo}%`, `%${termo}%`, `%${termo}%`]);
  return resultado.rows;
}
