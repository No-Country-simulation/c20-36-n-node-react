const {Users} = require('../db')
const {encrypt,compare}=require('../utils/handlePassword')
const {tokenSing}=require('../utils/handleJwt')
const ClientError=require('../utils/ApiError')

class AuthService{
    async registerUser(data){
        const userExisting=await Users.findOne({where:{email:data.email}})
        if (userExisting){
            throw new ClientError("Usuario ya registrado")
        }
        const hashedPassword=await encrypt(data.password)
        const userRegistrerData={
            ...data,
            password:hashedPassword
        }
        const registerUser=await Users.create(userRegistrerData)
        return registerUser
    }
    async loginUser(dataUser){
        const user=await Users.findOne({where:{email:dataUser.email}})
        if(!user){
            throw new ClientError("El usuario no existe")
        }
        const data={
            token:await tokenSing(user),
            user:user
        }
        return data 
    }
}

module.exports=new AuthService()