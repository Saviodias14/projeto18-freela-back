import Joi from "joi";

export const passagensSchema = Joi.object({
    companhia: Joi.string().required(),
    destino: Joi.string().required(),
    origem: Joi.string().required(),
    horaChegada: Joi.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/).required(),
    horaPartida: Joi.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/).required(),
    preco: Joi.number().min(1).required()
})