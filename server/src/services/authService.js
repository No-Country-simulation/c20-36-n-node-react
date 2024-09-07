const {Users} = require('../db')
const bcrypt=require('bcrypt')
const ClientError=require('../utils/ApiError')
class AuthService{
    async registerUser(data){
        const userExisting=await Users.findOne({where:{email:data.email}})
        if (userExisting){
            throw new ClientError("Usuario ya registrado")
        }
        const hashedPassword=await bcrypt.hash(data.password,10)
        const userRegistrerData={
            ...data,
            password:hashedPassword
        }
        const registerUser=await Users.create(userRegistrerData)
        return registerUser
    }
}

module.exports=new AuthService()