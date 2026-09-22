import atendimento from "../service/atendimento.js"

class controlleratendimento {
    async Buscar(_, res) {
        try {
            console.log(req.session)
            const atendimento = await ServiceAtendimento.Buscar()
            res.status(200).send({ mensagem: atendimento })
        } catch (error) {
            res.status(500).send({
                mensagem: error.massage
            })
        }
    }
    async Detalhe(req, res) {
        try {
            const id = req.params.id
            const cliente = await ServiceAtendimento.Detalhe(id)
            res.status(200).send({ mensagem: cliente })
        } catch (error) {
            res.status(500).send({ mensagem: error.massage })
        }
    }
    async Criar(req, res) {
        try {
            const { email, senha } = req.body
            await ServiceAtendimento.Criar(email, senha)

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
            await ServiceAtendimento.Alterar(id, email, senha)
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
            await ServiceAtendimento.Deletar(identificador)
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
            const token = await ServiceAtendimento.Login(email, senha)
            res.status(200).send({
                token
            })
        } catch (error) {
            res.status(500).send({mensage:error.message})
        }
    }
}
export default new controlleratendimento()