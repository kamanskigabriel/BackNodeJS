import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import RepositoryCliente from '../repository/clientes.js'

const segredo = 'M3uS3gr3d0'
class ServiceCliente {

    async Buscar() {
        return RepositoryCliente.Find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Infoma o ID")
        }
        const atendimento = await RepositoryCliente.FindById(id)
        if (!atendimento) {
            throw new Error(`ID ${id} do usuario não achado`)
        }
        return atendimento
    }

    async Criar(email, senha) {
        if (!email || !senha) {
            throw new Error("Informar dados")
        }
        const senhaCripto = await bcrypt.hash(senha, 12)
        const atendimento = await RepositoryCliente.Create(email, senhaCripto)
        return atendimento
    }

    async Alterar(id, senha, email) {
        if (!id) {
            throw new Error("Informar dados")
        }
        const senhaCripto = !senha
            ? undefined
            : await bcrypt.hash(senha, 12)
        const atendimentoAlterar = await RepositoryCliente.Update(id, email, senhaCripto)
        return atendimentoAlterar
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Informar ID")
        }
        const atendimento = await RepositoryCliente.Delete(id)
        return atendimento
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou Senha inválidos")
        }
        const atendimento = await RepositoryCliente.FindByEmail(email)
        if (!atendimento) {
            throw new Error("Email ou Senha inválidos")
        }
        if (
            !(await bcrypt.compare(String(senha), atendimento.senha))) {
            throw new Error("Email ou Senha inválidos")
        }
        return jwt.sign(
            {
                id: atendimento
                    .id, email
            },
            segredo,
            { expiresIn: 60 * 60 }
        )
    }
}
export default new ServiceCliente()