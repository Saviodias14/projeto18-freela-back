import { Router } from "express";
import passagensRouter from "./passagens.routes.js";
import hospedagemRouter from "./hospedagens.router.js";
import cidadesRouter from "./cidades.router.js";

const router = Router()

router.use(passagensRouter)
router.use(hospedagemRouter)
router.use(cidadesRouter)

export default router