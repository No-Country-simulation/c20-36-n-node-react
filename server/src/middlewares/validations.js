const validator=require('validator')
const ApiError=require('../utils/ApiError')
const validation=(req,res,next)=>{
    const {email}=req.body
    const isValidEmail=validator.isEmail(email)
    if(!isValidEmail){
        throw new ApiError('Invalid Email')
    }
    next()
}
module.exports = {
    validation
}