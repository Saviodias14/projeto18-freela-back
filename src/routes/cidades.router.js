import { Router } from "express";
import { pegaCidadesDestino, pegaCidadesOrigem } from "../controllers/cidades.controller.js";

const cidadesRouter = Router()

cidadesRouter.get("/cidades/destino", pegaCidadesDestino)
cidadesRouter.get("/cidades/origem", pegaCidadesOrigem)

export default cidadesRouter