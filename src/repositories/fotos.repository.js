import { db } from "../database/database.connection";

export async function postFotos(hospedagemId, fotos){
    fotos.forEach(async element => {
        await db.query(`INSERT INTO fotos ("hotelId", foto)
                      VALUES ($1, $2)`, [hospedagemId, element])  
      })
}