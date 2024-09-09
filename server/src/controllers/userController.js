const userService=require('../services/userService')
const userGet=async (req,res)=>{
    const response=await userService.userMe()
    res.json({msg:response})
}
const userMeUpdate=async(req,res)=>{
    const response=await userService.userUpdate()
    res.json({msg:response})
}
module.exports={
    userGet,
    userMeUpdate
}