const server = require("./src/server.js");
const { conn } = require('./src/db.js');
require("dotenv").config();
const PORT = process.env.PORT||3000; //

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
