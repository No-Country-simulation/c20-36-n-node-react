const express = require("express");
const {validation}=require('../middlewares/validations')
const {login,register}=require('../controllers/authController')
//Importo todas las rutas:



const authRouter = express.Router();

//configuramos rutas:
// Ejemplo: mainRouter.use("/", );

authRouter.get('/login',validation,login)
authRouter.post('/register',validation,register)

module.exports = authRouter;
