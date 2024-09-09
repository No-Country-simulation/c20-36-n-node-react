class userService {
    async userMe(){
        return 'soy user me'
    }
    async userUpdate(){
        return 'soy update'
    }
}
module.exports=new userService()