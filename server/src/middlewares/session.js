const resError = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const authMiddleware = async (req, res, next) => {
  const {jwt}=req.cookies
  if(!jwt){
    resError(res, 401, "does not have a token")
  }
  const tokenData= await verifyToken(jwt)
  if(!tokenData){
    resError(res, 402, "Incorrect or Expired Token")
  }
  next()
};

module.exports = authMiddleware;
