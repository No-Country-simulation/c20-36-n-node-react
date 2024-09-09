const express = require('express')
const authRouter=require('./authRouter')
const userRouter=require('./userRouter')
const router=express.Router()

//montamos las rutas con el prefijo api/v1/
router.use('/auth',authRouter)
router.use('/user',userRouter)
module.exports=router