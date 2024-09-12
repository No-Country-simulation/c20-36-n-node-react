const jwt=require('jsonwebtoken')
const JWT_SECRET=process.env.JWT_SECRET
const tokenSing=async(user)=>{
    const sign = await jwt.sign({
        _id:user.userID,
        name:user.name,
        lastName:user.lastName,
        email:user.email,
    },
    JWT_SECRET,
    {
        expiresIn:'2h'
    }

    )
    return sign
}
const verifyToken=async(tokenJwt)=>{
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports={
    tokenSing,
    verifyToken
}