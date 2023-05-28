import { db } from "../database/database.connection.js";

export async function postPassagem(companhiaId, destinoId, origemId, horaChegada, horaPartida, preco) {
    return await db.query(`INSERT INTO "passagem" 
                    ("companhiaId", "destinoId", "origemId", "horaChegada", "horaPartida", preco)
                    VALUES ($1, $2, $3, $4, $5, $6)`,
        [companhiaId, destinoId, origemId, horaChegada, horaPartida, preco])
}

export async function getPassagem(destino, origem, min, max) {
    return await db.query(`
    SELECT p.id, p."horaPartida", p."horaChegada", p.preco, "cidadeDestino".nome AS destino, "cidadeOrigem".nome AS origem, MAX(p.preco) AS "maiorPreco"
    FROM passagem p
    JOIN "cidadeDestino" ON "cidadeDestino".id = p."destinoId"
    JOIN "cidadeOrigem" ON "cidadeOrigem".id = p."origemId"
    WHERE "cidadeDestino".id = $1 
    AND "cidadeOrigem".id = $2
    AND p.preco >= $3
    AND p.preco <= $4
	GROUP BY p.id, "cidadeDestino".nome, "cidadeOrigem".nome
  `, [destino, origem, min, max])
}

export async function getPassagemById(id) {
    return await db.query(`
    SELECT p.id, p."horaPartida", p."horaChegada", p.preco,companhia.nome AS companhia, "cidadeDestino".nome AS destino, "cidadeOrigem".nome AS origem    FROM passagem p
    JOIN "cidadeDestino" ON "cidadeDestino".id = p."destinoId"
    JOIN "cidadeOrigem" ON "cidadeOrigem".id = p."origemId"
	JOIN companhia ON companhia.id = p."companhiaId"
    WHERE p.id=$1
  `, [id])
}