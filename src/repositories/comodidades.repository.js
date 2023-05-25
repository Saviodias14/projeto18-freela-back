import { db } from "../database/database.connection";

export async function postComodidades(comodidades){
    const result = []
    comodidades.forEach(async element => {
        const comodidadeId = await db.query(`SELECT comodidade.id FROM comodidade
                                             WHERE nome=$1`, [element])
        if(comodidadeId.rowCount!==0){
            result.push(comodidadeId.rows[0].id)
        }else{
            const newComodidade = await db.query(`INSERT INTO comodidade (nome)
                                                  VALUES ($1) RETURNING id`, [element])
            result.push(newComodidade.rows[0].id)
        }
    })
    return result
}