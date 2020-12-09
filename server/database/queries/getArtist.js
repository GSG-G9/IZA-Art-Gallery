const dbConnection = require("../config/connection");

const getArtistByName = (name) => {
  const sql = {
    text: "SELECT * FROM artist where name ILIKE $1;",
    values: [`%${name}%`],
  };
  return dbConnection.query(sql);
};
const getArtist1 = () => {
  const sql = {
    text: "SELECT * FROM artist;",
  };
  return dbConnection.query(sql);
};

module.exports = {
  getArtist1,
  getArtistByName,
};
