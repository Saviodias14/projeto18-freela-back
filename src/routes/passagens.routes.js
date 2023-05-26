import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { passagensSchema } from "../schemas/passagens.schema.js";
import { criaPassagem, pegaPassagemPeloId, pegaPassagemagem } from "../controllers/passagens.contoller.js";

const passagensRouter = Router()

passagensRouter.post("/passagem", validateSchema(passagensSchema), criaPassagem)
passagensRouter.get("/passagem/cidade/:destino/:origem", pegaPassagemagem)
passagensRouter.get("/passagem/:id", pegaPassagemPeloId)

export default passagensRouter