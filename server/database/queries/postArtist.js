const dbConnection = require("../config/connection");

const postArtist1 = (userData) => {


  const { name, yearOfBirth, nationality, workStyle, picture } = userData;
  const sql = {
    text:
      "INSERT INTO artist (name, yearOfBirth,nationality,workStyle,picture ) VALUES ($1, $2,$3,$4,$5) returning *;",
    values: [name, yearOfBirth, nationality, workStyle, picture],
  };
  return dbConnection.query(sql);
};

module.exports = {
  postArtist1,
};
