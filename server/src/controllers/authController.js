const httpStatus=require('http-status')
const authService=require('../services/authService')
const catchAsync=require('../utils/catchAsync')

const register=catchAsync(async(req,res)=>{
    const data=req.body
    const auth=await authService.registerUser(data)  
    res
      .status(httpStatus.CREATED)
      .json({ error: false, message: "User successfully registered"});
})
const login=catchAsync(async(req,res)=>{
    const data=req.body
    const login=await authService.loginUser(data)
    const {user}=login
    res.cookie('jwt',login.token)
    res.status(httpStatus.CREATED).json({error:false,data:"successful login"})
})

module.exports={
    register,
    login
}