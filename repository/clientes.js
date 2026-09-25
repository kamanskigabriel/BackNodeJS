import database from "../config/database.js"

class RepositoryCliente {

    async Find() {
        const clientes = await cliente.findAll()
        return clientes
    }

    async FindById(id) {
        const clienteDetalhes = await cliente.findByPk(id)

        return clienteDetalhes
    }

    async Create() {
        const clienteCreate = await cliente.create({ email, senha })
        return clienteCreate
    }

    async Update() {
        const clienteAlterar = await cliente.findByPk(id)

        if (!clienteAlterar) {
            throw new Error("Usuario não encontrado")
        }

        clienteAlterar.email = email || clienteAlterar.email
        clienteAlterar.senha = senha || clienteAlterar.senha

        await clienteAlterar.save()
    }

    async Delete(id) {
        const clienteDeletar = await cliente.findByPk(id)

        if (!clienteDeletar) {
            throw new Error("Usuario não encontrado")
        }
        await clienteDeletar.destroy()
        return clienteDeletar
    }

    async FindByEmail(email) {
        return cliente.findOne({ where: { email } })
    }
}
export default new RepositoryCliente()