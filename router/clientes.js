import express from 'express'
import autMiddleware from '../middleware/clientes.js'
import clientes from '../controller/clientes.js'

const router = express.Router()

router.post("/login", clientes.Login)
router.get("/buscar", autMiddleware, clientes.Buscar)
router.get("/detalhe/:id", autMiddleware, clientes.Detalhe)
router.post("/criar", autMiddleware, clientes.Criar)
router.put("/alterar", autMiddleware, clientes.Alterar)
router.delete("/deletar/:id", autMiddleware, clientes.Deletar)
export default router