import { db } from "../database/database.connection";

export async function postHotelComodidades(hospedagemId, comodidadesId){
    comodidadesId.forEach(async element => {
      await db.query(`INSERT INTO "hotelComodidades" ("hotelId", comodidadeId)
                    VALUES ($1, $2)`, [hospedagemId, element])  
    })
}