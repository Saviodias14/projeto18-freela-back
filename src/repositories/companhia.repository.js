import { db } from "../database/database.connection";

export async function postCompanhia(companhia){
    const result = await db.query(`SELECT companhia.id FROM companhia
                                   WHERE nome=$1`, [companhia])
    if(result.rowCount!==0)return result
    return await db.query(`INSERT INTO companhia (nome)
                    VALUES ($1) RETURNING id`, [companhia])
}