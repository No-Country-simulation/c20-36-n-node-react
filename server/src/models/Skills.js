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
            allowNull: false,
            references: {
                model: 'Users',
                key: 'userID',
            },
        },
        languagesID: {
            type: DataTypes.UUID, 
            allowNull: false,
            references: {
                model: 'Languages',
                key: 'languagesID',
            },
        },
        frameworksID: {
            type: DataTypes.UUID, 
            allowNull: false,
            references: {
                model: 'Frameworks',
                key: 'frameworksID',
            },
        },
    },{timestamps:false});
};