const {Users} = require('../db')
class userService {
    async userMe(id){
        const userData=await Users.findOne({where:{userID:id}})
        return userData
    }
    async userUpdate(){
        return 'soy update'
    }
}
module.exports=new userService()