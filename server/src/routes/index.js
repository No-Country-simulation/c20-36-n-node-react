const express = require('express')
const authRouter=require('./authRouter')
const userRouter=require('./userRouter')
const skillRouter=require('./skillRouter')
const router=express.Router()

//montamos las rutas con el prefijo api/v1/
router.use('/auth',authRouter)
router.use('/user',userRouter)
router.use('/skill',skillRouter)
module.exports=router