import Joi from "joi";

export const hospedagemSchema = Joi.object({
    nomeHotel: Joi.string().required(),
    cidade: Joi.string().required(),
    preco: Joi.number().min(1).required(),
    descricao: Joi.string().required(),
    fotoPrincipal: Joi.string().uri().required(),
    comodidades: Joi.array().items(Joi.string().required()).required(),
    fotos: Joi.array().items(Joi.string().uri().required()).required()
})