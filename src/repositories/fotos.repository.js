import { db } from "../database/database.connection.js";

export async function postFotos(hospedagemId, fotos) {
    console.log(hospedagemId, fotos);
    for (const element of fotos) {
        await db.query(`INSERT INTO fotos ("hotelId", foto) VALUES ($1, $2)`, [hospedagemId, element]);
    }
}