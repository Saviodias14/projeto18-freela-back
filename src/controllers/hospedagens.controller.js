import { postCidadeDestino } from "../repositories/cidades.repository.js"
import { postComodidades } from "../repositories/comodidades.repository.js"
import { postFotos } from "../repositories/fotos.repository.js"
import { postHospedagem } from "../repositories/hospedagens.repository.js"
import { postHotelComodidades } from "../repositories/hotelComodidades.respository.js"

export async function criaHospedagen(req, res) {
    const { nomeHotel, cidade, preco, descricao, fotoPrincipal, comodidades, fotos } = req.body
    try {
        const destinoId = await postCidadeDestino(cidade)
        const hospedagemId = await postHospedagem(nomeHotel, destinoId.rows[0].id, preco, descricao, fotoPrincipal)
        const comodidadesId = await postComodidades(comodidades)
        console.log(hospedagemId.rows[0].id)
        await postHotelComodidades(hospedagemId.rows[0].id, comodidadesId)
        await postFotos(hospedagemId.rows[0].id, fotos)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}