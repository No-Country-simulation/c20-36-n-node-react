const {Skills} = require('../db')
const ClientError = require('../utils/ApiError')
const CLientError=require('../utils/ApiError')
class skillService{
    async getSkill(ID){
        const response = await Skills.findAll({where:{userID:ID}})
        if(response==0){
            throw new CLientError("No Existe perfil tecnico asociado a esta cuenta")
        }
        return response
    }
    async createSkill(data){
        const response = await Skills.create(data)
        if(!response){
            throw new CLientError("Ocurrio un error inesperado")
        }
        return response
    }
    async updateSkill(data,id){
        const response = await Skills.update(data,{where:{skillsID:id}})
        if(response==0){
            throw new ClientError("no se realizo ninguna actualizacion")
        }
        return response
    }
}

module.exports=new skillService()