import { db } from "../database/database.connection.js";

export async function postPassagem(companhiaId, destinoId, origemId, horaChegada, horaPartida, preco){
    return await db.query(`INSERT INTO "passagem" 
                    ("companhiaId", "destinoId", "origemId", "horaChegada", "horaPartida", preco)
                    VALUES ($1, $2, $3, $4, $5, $6)`, 
                    [companhiaId, destinoId, origemId, horaChegada, horaPartida, preco])
}