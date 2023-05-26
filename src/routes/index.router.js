import { Router } from "express";
import passagensRouter from "./passagens.routes.js";
import hospedagemRouter from "./hospedagens.router.js";

const router = Router()

router.use(passagensRouter)
router.use(hospedagemRouter)

export default router