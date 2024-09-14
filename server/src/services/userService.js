const { where } = require('sequelize')
const {Users} = require('../db')
class userService {
    async userMe(id){
        const userData=await Users.findOne({where:{userID:id}})
        return userData
    }
    async userUpdate(id,data){
        const userDataUpdate=await Users.update(data,{where:{userID:id}})
        return userDataUpdate
    }
}
module.exports=new userService()