import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import RepositoryCliente from '../repository/clientes.js'

const segredo = 'M3uS3gr3d0'
class ServiceCliente {
    async Buscar (){
      return RepositoryCliente.Find()
    }
    async Detalhe(id){
        if(!id){
            throw new Error("Infoma o ID")
        }
        const cliente = await RepositoryCliente.FindById(id)
        if(!cliente){
            throw new Error(`ID ${id} do usuario não achado`)
        }
        return cliente
    }
    async Criar (email,senha){ 
    if (!email||!senha){
        throw new Error("Informar dados")
    }
    const senhaCripto = await bcrypt.hash(senha, 12)
    const cliente = await RepositoryCliente.Create(email,senhaCripto)
    return cliente
    }
    async Alterar (id, senha, email){
        if(!id){
            throw new Error ("Informar dados")
        }
        const senhaCripto = !senha
        ?undefined
        :await bcrypt.hash(senha,12)
        const clienteAlterar = await RepositoryCliente.Update(id, email, senhaCripto)
        return clienteAlterar
    }
    async Deletar (id){
        if(!id){
            throw new Error("Informar ID")
        }
        const cliente = await RepositoryCliente.Delete(id)
        return cliente
    }
    async Login(email, senha){
        if(!email||!senha){
            throw new Error("Email ou Senha inválidos")
        }
        const cliente = await RepositoryCliente.FindByEmail(email)
        if(!cliente){
            throw new Error ("Email ou Senha inválidos")
        }
        if(
            !(await bcrypt.compare(String(senha), cliente.senha))
        ){
            throw new Error ("Email ou Senha inválidos")
        }
        return jwt.sign(
            {id: cliente.id, email},
            segredo,
            {expiresIn: 60*60}
        )
    }
}
export default new ServiceCliente()