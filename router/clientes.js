import express from 'express'
import autMiddleware from '../middleware/clientes'
import clientes from '../controller/clientes.js'

const router = express.Router()

router.post("/login", controllerclientes.Login)
router.get("/buscar", autMiddleware, controllerclientes, Buscar)
router.get("/detalhe", autMiddleware, controllerclientes, Detalhe)
router.post("/criar", autMiddleware, controllerclientes, Criar)
router.put('/Alterar', autMiddleware, controllerclientes, Alterar)
router.delete('delete', autMiddleware, controllerclientes, Delete)

export default router