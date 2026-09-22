import ServiceCliente from '../service/clientes.js'

class controllerclientes {
    async Buscar(_, res) {
        try {
            console.log(req.session)
            const clientes = await ServiceCliente.Buscar()
            res.status(200).send({ mensagem: clientes })
        } catch (error) {
            res.status(500).send({
                mensagem: error.massage
            })
        }
    }
    async Detalhe(req, res) {
        try {
            const id = req.params.id
            const cliente = await ServiceCliente.Detalhe(id)
            res.status(200).send({ mensagem: cliente })
        } catch (error) {
            res.status(500).send({ mensagem: error.massage })
        }
    }
    async Criar(req, res) {
        try {
            const { email, senha } = req.body
            await ServiceCliente.Criar(email, senha)

            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const { email, senha } = req.body
            const id = req.session.id
            await ServiceCliente.Alterar(id, email, senha)
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
    async Deletar(req, res) {
        try {
            const identificador = req.params.id
            await ServiceCliente.Deletar(identificador)
            res.status(204).send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
    async Login(req, res) {
        try {
            const {email, senha} = req.body
            const token = await ServiceCliente.Login(email, senha)
            res.status(200).send({
                token
            })
        } catch (error) {
            res.status(500).send({mensage:error.message})
        }
    }
}
export default new controllerclientes()