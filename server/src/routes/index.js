const express = require('express')
const authRouter=require('./authRouter')
const router=express.Router()

//montamos las rutas con el prefijo api/v1/
router.use('/auth',authRouter)

module.exports=router