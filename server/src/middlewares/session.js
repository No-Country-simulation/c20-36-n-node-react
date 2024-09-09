const ApiError=require('../utils/ApiError')
const {verifyToken}=require('../utils/handleJwt')
const authMiddleware = async(req,res,next)=>{
    try {
        if (!req.cookies) {
          throw new ApiError("INVALID_TOKEN");
        }
        const token = req.cookies.jwt
        const tokenData=await verifyToken(token)
        if(!tokenData._id){
            throw new ApiError('INVALID_TOKEN')
        }
        next()
    }
    catch (error) {
        throw new ApiError('EXPIRED OR INCORRETC TOKEN')
    }
}

module.exports = authMiddleware