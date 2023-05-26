import { getCidadesDestino, getCidadesOrigem } from "../repositories/cidades.repository.js"

export async function pegaCidadesDestino(req, res){
    try{
        const result = await getCidadesDestino()
        res.status(200).send(result.rows)
    }catch(err){
        res.status(500).send(err.message)
    }
}

export async function pegaCidadesOrigem(req, res){
    try{
        const result = await getCidadesOrigem()
        res.status(200).send(result.rows)
    }catch(err){
        res.status(500).send(err.message)
    }
}