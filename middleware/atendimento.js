import jwt from 'jsonwebtoken'

const segredo = "mysecr2et"

export default async function autMiddleware(req,res,next){
     try {
        const token = req.headers['authorization']
        if (!token){
            throw new Error()
        }
        const decoded = jwt.verify(token,segredo)
        req.session = decoded
        next()
     } catch (error){
        res.status(400).send({
            message : "Usuário ou Senha inválido"
        })
     }
}