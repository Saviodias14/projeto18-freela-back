import { postCidadeDestino, postCidadeOrigem } from "../repositories/cidades.repository.js"
import { postCompanhia } from "../repositories/companhia.repository.js"
import { postPassagem } from "../repositories/passagens.repository.js"

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