const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Matches',{
        matchID:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        userId_1:{
            type: DataTypes.UUID, 
            allowNull: false,
            references: {
                model: 'Users',
                key: 'userID',
            },
        },
        userId_2:{
            type: DataTypes.UUID, 
            allowNull: false,
            references: {
                model: 'Users',
                key: 'userID',
            },
        },
        matchScore:{
            type:DataTypes.INTEGER
        },
        status:{
            type:DataTypes.STRING,
            comment:'pendiente,aceptado,rechazado',
            defaultValue:'pendiente'
        }
    },{timestamps:false});
};