const httpStatus=require('http-status')
const bcrypt=require('bcrypt')
const authService=require('../services/authService')
const catchAsync=require('../utils/catchAsync')

const register=catchAsync(async(req,res)=>{
    const data=req.body
    const auth=await authService.registerUser(data)
    
    res.status(httpStatus.CREATED).json({error:false,message:'Usuario registrado con exito'})
})
const login=catchAsync(async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

module.exports={
    register,
    login
}