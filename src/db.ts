import { Pool } from 'pg';

export const pool = new Pool({
  user: "aluno",
  host: "localhost",
  database: "postgres",
  password: "102030",
  port: 5432,
});

export async function conectarBanco() {
  try {
    await pool.connect();
    console.log("Conectado ao banco de dados!");
  } catch (erro) {
    console.error("Erro ao conectar no banco:", erro);
  }
}
