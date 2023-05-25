import { postCidadeDestino } from "../repositories/cidades.repository.js"
import { postComodidades } from "../repositories/comodidades.repository.js"
import { postFotos } from "../repositories/fotos.repository.js"
import { postHospedagem } from "../repositories/hospedagens.repository.js"
import { postHotelComodidades } from "../repositories/hotelComodidades.respository.js"

export async function criaHospedagen(req, res) {
    const { nomeHotel, cidade, preco, descricao, fotoPrincipal, comodidades, fotos } = req.body
    try {
        const destinoId = (await postCidadeDestino(cidade)).rows
        const hospedagemId = (await postHospedagem(nomeHotel, destinoId[0].id, preco, descricao, fotoPrincipal)).rows
        const comodidadesId = await postComodidades(comodidades)
        await postHotelComodidades(hospedagemId[0].id, comodidadesId)
        await postFotos(hospedagemId[0].id, fotos)
    } catch (err) {
        res.status(500).send(err.message)
    }
}