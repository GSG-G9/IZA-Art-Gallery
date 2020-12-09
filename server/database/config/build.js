const { readFileSync } = require("fs");
const { join } = require("path");

const connection = require("./connection");
console.log('build.js')
// const dbBuild = () => {
//   const sql = readFileSync(join(__dirname, "build.sql")).toString();
//   return connection.query(sql);
// };

// module.exports = { dbBuild };

const sql = readFileSync(join(__dirname,'build.sql')).toString();
connection
.query(sql)
.then(()=>console.log('database created successfully'))
.catch((error)=>console.log(`${err} somthing went wrong`))