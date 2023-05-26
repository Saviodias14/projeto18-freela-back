import { db } from "../database/database.connection.js";

export async function postCidadeOrigem(origem) {
    const result = await db.query(`SELECT "cidadeOrigem".id FROM "cidadeOrigem"
                                   WHERE nome=$1`, [origem])
    if (result.rowCount !== 0) return result
    return await db.query(`INSERT INTO "cidadeOrigem" (nome)
                    VALUES ($1) RETURNING id`, [origem])
}

export async function postCidadeDestino(destino) {
    const result = await db.query(`SELECT "cidadeDestino".id FROM "cidadeDestino"
                                   WHERE nome=$1`, [destino])
    if (result.rowCount !== 0) return result
    return await db.query(`INSERT INTO "cidadeDestino" (nome)
                    VALUES ($1) RETURNING id`, [destino])
}

export async function getCidadesDestino() {
    const result = await db.query(`SELECT * FROM "cidadeDestino"`)
    return result
}

export async function getCidadesOrigem() {
    const result = await db.query(`SELECT * FROM "cidadeOrigem"`)
    return result
}