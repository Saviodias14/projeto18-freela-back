import { db } from "../database/database.connection.js";

export async function postHospedagem(nomeHotel, destinoId, preco, descricao, fotoPrincipal){
    return await db.query(`INSERT INTO hospedagem 
                           (nome, "destinoId", preco, descricao, "fotoPrincipal")
                           VALUES ($1, $2, $3, $4, $5) 
                           RETURNING id`, [nomeHotel, destinoId, preco, descricao, fotoPrincipal])
}

export async function getHospedagem(destino, min, max){
    return await db.query(`
    SELECT hospedagem.nome, hospedagem.preco, hospedagem."fotoPrincipal", "cidadeDestino".nome AS cidade, MAX(hospedagem.preco) AS "maiorPreco"
    FROM hospedagem
    JOIN "cidadeDestino" ON "cidadeDestino".id = hospedagem."destinoId"
    WHERE "cidadeDestino".id = $1 
    AND hospedagem.preco >= $2 
    AND hospedagem.preco <= $3
    GROUP BY hospedagem.nome, hospedagem.preco, hospedagem."fotoPrincipal", "cidadeDestino".nome
  `, [destino, min, max])
}

export async function getHospedagemById(id){
    return await db.query(`
    SELECT h.nome AS "nomeHotel", h.preco, h."fotoPrincipal", 
    h.descricao, d.nome AS destino, fotos.foto, comodidades.nome AS comodidades
    FROM hospedagem h
    JOIN "cidadeDestino" d ON d.id = h."destinoId"
    JOIN fotos ON fotos."hotelId" = h.id
    JOIN "hotelComodidades" ON "hotelComodidades"."hotelId" = h.id
    JOIN comodidades ON "hotelComodidades"."comodidadeId" = comodidades.id
    WHERE h.id = $1 
  `, [id])
}