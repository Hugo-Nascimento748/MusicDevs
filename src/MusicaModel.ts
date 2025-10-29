import { pool } from "./db";

export interface Musica {
  nome: string;
  banda: string;
  produtora: string;
}

export async function inserirMusica(musica: Musica) {
  const query = `
    INSERT INTO musica (nome, banda, produtora)
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
    WHERE nome ILIKE $1 OR banda ILIKE $1 OR produtora ILIKE $1;
  `;
  const resultado = await pool.query(query, [`%${termo}%`]);
  return resultado.rows;
}
