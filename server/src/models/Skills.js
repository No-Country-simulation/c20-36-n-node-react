const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Skills', {
        skillsID: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        userID: {
            type: DataTypes.UUID, 
            allowNull: true,
            references: {
                model: 'Users',
                key: 'userID',
            },
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            comment:'Stack ejemplo frontend, backend, devops, tester'
        },
        level:{
            type:DataTypes.STRING,
            allowNull:false,
            comment:'ejemplo basico, intermedio, avanzado, experto'
        },
        years_of_experience:{
            type:DataTypes.INTEGER,
        },
        languages: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: ["javascript"],
            allowNull: true,
        },
        frameworks:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            defaultValue:["react"],
            allowNull:true
        }
    },{timestamps:false});
};