const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Frameworks', {
        frameworksID: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        skillsID:{
            type:DataTypes.UUID,
            allowNull:false,
            references:{
                model:'Skills',
                key:'skillsID'
            }
        }
    },{timestamps:false});
};