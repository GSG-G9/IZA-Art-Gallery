const { readFileSync } = require("fs");
const { join } = require("path");

const connection = require("./connection");
console.log('build.js')
const dbBuild = () => {
  const sql = readFileSync(join(__dirname, "build.sql")).toString();
  return connection.query(sql);
};

module.exports = { dbBuild };
