import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { hospedagemSchema } from "../schemas/hospedagem.schema.js";
import { criaHospedagen, pegaHospedagem, pegaHospedagemPeloId } from "../controllers/hospedagens.controller.js";

const hospedagemRouter = Router()

hospedagemRouter.post("/hospedagem", validateSchema(hospedagemSchema), criaHospedagen)
hospedagemRouter.get("/hospedagem/cidade/:destino", pegaHospedagem)
hospedagemRouter.get("/hospedagem/:id", pegaHospedagemPeloId)

export default hospedagemRouter