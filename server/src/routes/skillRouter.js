const express=require('express')
const authMiddleware = require("../middlewares/session");
const {
    skillGetController,
    skillCreateController,
    skillUpdateController,
    skillDeleteController
}=require('../controllers/skillController')
const skillRouter=express.Router()

skillRouter.get("/all",authMiddleware,skillGetController)
skillRouter.post("/add",authMiddleware,skillCreateController)
skillRouter.patch("/update/:ID",authMiddleware,skillUpdateController)
skillRouter.delete('/del/:ID',authMiddleware,skillDeleteController)

module.exports=skillRouter