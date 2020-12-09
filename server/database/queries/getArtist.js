const dbConnection = require("../config/connection");

const getArtist1= (name) => {

    const sql = {
        text: "SELECT * FROM artist where name ILIKE $1;",
        values: [`%${name}%`]
      };
      return dbConnection.query(sql);
};

// const getArtist1 = () => {
//   console.log('SELECT * FROM artist')
//   console.log(dbConnection.query('SELECT * FROM artist'))
//     return dbConnection.query('SELECT * FROM artist');
//   };
//  console.log({getArtist1}) 

module.exports = {
  getArtist1
};
