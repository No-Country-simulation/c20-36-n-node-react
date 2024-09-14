const { DataTypes } = require('sequelize');
const { default: isURL } = require('validator/lib/isURL');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Users', {
    userID:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
      len: {
        args: [3, 20],
        msg: "El nombre debe contener entre 3 a 20 caracteres",
      }
    }},
    lastName:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
      len: {
        args: [3, 20],
        msg: "El apellido debe contener entre 3 a 20 caracteres",
      }
    }},
    email: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, // revisar luego👀
    },
    urlGitHub:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:{
          args:true,
          msg:"Debe ser una URL valida"
        }
      }
    },
    urlLinkedIn:{
      type:DataTypes.STRING,
      allowNull:true,
      validate:{
        isUrl:{
          args:true,
          msg:"Debe ser una URL valida"
        }
      }
    },
    biography: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue:"https://png.pngtree.com/png-clipart/20210311/original/pngtree-customer-login-avatar-png-image_6015290.jpg",
      validate: {
        isUrl:{
          args: true,
          msg: "Debe ser una URL valida",
        }
    }},
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    birth: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    defaultScope:{
      attributes: {exclude:['password']}
    }
  });
};