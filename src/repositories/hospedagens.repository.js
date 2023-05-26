import { db } from "../database/database.connection.js";

export async function postHospedagem(nomeHotel, destinoId, preco, descricao, fotoPrincipal){
    return await db.query(`INSERT INTO hospedagem 
                           (nome, "destinoId", preco, descricao, "fotoPrincipal")
                           VALUES ($1, $2, $3, $4, $5) 
                           RETURNING id`, [nomeHotel, destinoId, preco, descricao, fotoPrincipal])
}