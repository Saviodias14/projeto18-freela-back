import { db } from "../database/database.connection";

export async function postCompanhia(companhia){
    return await db.query(`INSERT INTO companhia (nome)
                    VALUES ($1) RETURNING id`, [companhia])
}