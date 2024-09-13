const express=require('express')
const {userGet,userMeUpdate}=require('../controllers/userController')
const authMiddleware=require('../middlewares/session')
const userRouter=express.Router()

userRouter.get('/me',authMiddleware,userGet)
userRouter.patch("/update", authMiddleware, userMeUpdate);

module.exports=userRouter