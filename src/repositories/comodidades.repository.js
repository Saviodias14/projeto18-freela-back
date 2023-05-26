import { db } from "../database/database.connection.js";

export async function postComodidades(comodidades) {
    const result = [];
  
    for (const element of comodidades) {
      const comodidadeId = await db.query('SELECT comodidades.id FROM comodidades WHERE nome = $1', [element]);
  
      if (comodidadeId.rowCount !== 0) {
        result.push(comodidadeId.rows[0].id);
      } else {
        const newComodidade = await db.query('INSERT INTO comodidades (nome) VALUES ($1) RETURNING id', [element]);
        console.log(newComodidade.rows[0].id);
        result.push(newComodidade.rows[0].id);
      }
    }
  
    console.log(result);
    return result;
  }