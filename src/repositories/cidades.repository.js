import { db } from "../database/database.connection.js";

export async function postCidadeOrigem(origem) {
    return await db.query(`INSERT INTO "cidadeOrigem" (nome)
                    VALUES ($1) RETURNING id`, [origem])
}

export async function postCidadeDestino(destino) {
    return await db.query(`INSERT INTO "cidadeDestino" (nome)
                    VALUES ($1) RETURNING id`, [destino])
}

