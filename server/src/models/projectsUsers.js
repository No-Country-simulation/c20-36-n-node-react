const {DataTypes}=require('sequelize');

module.exports=(sequalize)=>{
    sequalize.define('projectsUsers',{
        projectID:{
            type:DataTypes.UUID,
            allowNUll:false,
            references:{
                model:'Projects',
                key:'projectID'
            }
        },
        userID:{
            type: DataTypes.UUID, 
            allowNull: false,
            references: {
                model: 'Users',
                key: 'userID',
            },
        },
        role:{
            type:DataTypes.STRING,
            comment:'rol del usuario en el proyecto'
        }
    });
};