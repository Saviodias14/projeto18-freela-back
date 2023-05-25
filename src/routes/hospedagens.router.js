import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { hospedagemSchema } from "../schemas/hospedagem.schema.js";

const hospedagemRouter = Router()

hospedagemRouter.post("/hospedagem", validateSchema(hospedagemSchema))