import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { passagensSchema } from "../schemas/passagens.schema.js";
import { criaPassagem } from "../controllers/passagens.contoller.js";

const passagensRouter = Router()

passagensRouter.post("/passagem", validateSchema(passagensSchema), criaPassagem)

export default passagensRouter