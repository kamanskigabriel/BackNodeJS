import database from "../config/database.js"

class RepositoryCliente {
    async Find() {
        const atendimentos = await atendimento.findAll()
        return atendimentos
    }
    async FindById(id) {
        const atendimentoDetalhes = await atendimento.findByPk(id)

        return atendimentoDetalhes
    }
    async Create() {
        const atendimentoCreate = await atendimento.create({ email, senha })
        return atendimentoCreate
    }
    async Update() {
      const atendimentoAlterar = await atendimento.findByPk(id)

        if(!atendimentoAlterar) {
            throw new Error("Usuario não encontrado")
        }

        atendimentoAlterar.email = email || atendimentoAlterar.email
        atendimentoAlterar.senha = senha || atendimentoAlterar.senha

        await atendimentoAlterar.save()
    }
    async Delete(id) {
        const atendimentoDeletar = await atendimento.findByPk(id)

        if(!atendimentoDeletar){
            throw new Error("Usuario não encontrado")
        }

        await atendimentoDeletar.destroy()

        return atendimentoDeletar
    }
    async FindByEmail(email) {
        return atendimento.findOne({ where: { email } })
    }
}
export default new RepositoryCliente()