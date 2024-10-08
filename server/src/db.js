const { Sequelize } = require("sequelize");
require("dotenv").config();
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//💜💙💜💙💜💙💜💙💜💙💜💙
//const { Users, Skills, Languages, Frameworks } = sequelize.models;

// Aca vendrian las relaciones

//Users.hasMany(Skills, {through: "Users_Skills"});
//Skills.belongsToMany(Users,{through: "Users_Skills"}); //👀 revisar si es belongsTo o belongsToMany

//⭐ Skills.belongsToMany(Frameworks, {through: "Skills_Frameworks"});

//⭐ Frameworks.belongsToMany(Skills, {through: "Skills_Frameworks"});

//🎀 Skills.belongsToMany(Languages, {through: "Skills_Languages"});

//🎀 Languages.belongsToMany(Skills, {through: "Skills_Languages"});

//💙💜💙
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};