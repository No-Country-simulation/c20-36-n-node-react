const {DataTypes} = require('sequelize');

module.exports=(sequelize)=>{
    sequelize.define('Projects',{
        projectID:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        projectName:{
            type:DataTypes.STRING,
        },
        description:{
            type:DataTypes.STRING
        },
        status:{
            type:DataTypes.STRING,
            defaultValue:'In Progress',
            comment:'Not Started, In Progress, Completed'
        },
    },{timestamps:false});
};