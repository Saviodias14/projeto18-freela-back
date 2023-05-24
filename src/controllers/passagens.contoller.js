import { postCidadeDestino, postCidadeOrigem } from "../repositories/cidades.repository.js"
import { postCompanhia } from "../repositories/companhia.repository.js"
import { postPassagem } from "../repositories/passagens.repository.js"

export async function criaPassagem(req, res) {
    const { companhia, destino, origem, horaChegada, horaPartida, preco } = req.body
    try {
        const { origemId } = await postCidadeOrigem(origem).rows
        const { destinoId } = await postCidadeDestino(destino).rows
        const { companhiaId } = await postCompanhia(companhia).rows
        await postPassagem(companhiaId[0].id, destinoId[0].id, origemId[0].id, horaChegada, horaPartida, preco)
    } catch (err) {
        res.status(500).send(err.message)
    }
}