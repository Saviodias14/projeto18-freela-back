import { postCidadeDestino, postCidadeOrigem } from "../repositories/cidades.repository.js"
import { postCompanhia } from "../repositories/companhia.repository.js"
import { getPassagem, getPassagemById, postPassagem } from "../repositories/passagens.repository.js"

export async function criaPassagem(req, res) {
    const { companhia, destino, origem, horaChegada, horaPartida, preco } = req.body
    try {
        const origemId = (await postCidadeOrigem(origem))
        const destinoId = (await postCidadeDestino(destino))
        const companhiaId = (await postCompanhia(companhia))
        await postPassagem(companhiaId.rows[0].id, destinoId.rows[0].id, origemId.rows[0].id, horaChegada, horaPartida, preco)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function pegaPassagemagem(req, res){
    const {destino, origem} = req.params
    const {min, max} = req.query
    try {
        const result = await getPassagem(destino, origem, min, max)
        res.status(200).send(result.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function pegaPassagemPeloId(req, res) {
    const { id } = req.params
    try {
        const result = await getPassagemById(id)
        res.status(200).send(result.rows[0])
    } catch (err) {
        res.status(500).send(err.message)
    }
}