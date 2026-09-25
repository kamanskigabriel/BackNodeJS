import express from 'express'
import controlleratendimento from '../controller/atendimento.js'
import autMiddleware from '../middleware/atendimento.js'

const router = express.Router()

router.post("/login", controlleratendimento.Login)
router.get("/buscar", autMiddleware, controlleratendimento.Buscar)
router.get("/detalhe/:id", autMiddleware, controlleratendimento.Detalhe)
router.post("/criar", autMiddleware, controlleratendimento.Criar)
router.put("/alterar/:id", autMiddleware, controlleratendimento.Alterar)
router.delete("/deletar/:id", autMiddleware, controlleratendimento.Deletar)
export default router