import organizaInformacoe from "../middlewares/informacoesHospedagem.js"
import { postCidadeDestino } from "../repositories/cidades.repository.js"
import { postComodidades } from "../repositories/comodidades.repository.js"
import { postFotos } from "../repositories/fotos.repository.js"
import { getHospedagem, getHospedagemById, postHospedagem } from "../repositories/hospedagens.repository.js"
import { postHotelComodidades } from "../repositories/hotelComodidades.respository.js"

export async function criaHospedagen(req, res) {
    const { nomeHotel, cidade, preco, descricao, fotoPrincipal, comodidades, fotos } = req.body
    try {
        const destinoId = await postCidadeDestino(cidade)
        const hospedagemId = await postHospedagem(nomeHotel, destinoId.rows[0].id, preco, descricao, fotoPrincipal)
        const comodidadesId = await postComodidades(comodidades)
        await postHotelComodidades(hospedagemId.rows[0].id, comodidadesId)
        await postFotos(hospedagemId.rows[0].id, fotos)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function pegaHospedagem(req, res) {
    const { destino } = req.params
    const { min, max } = req.query
    console.log(destino)
    try {
        const result = await getHospedagem(destino, min, max)
        res.status(200).send(result.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function pegaHospedagemPeloId(req, res) {
    const { id } = req.params
    try {
        const result = await getHospedagemById(id)
        const resultTratado = organizaInformacoe(result)
        res.status(200).send(resultTratado)
    } catch (err) {
        res.status(500).send(err.message)
    }
}