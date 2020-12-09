
const { getArtist1 } = require("../database/queries/getArtist");



 getTheArtist = (req, res) => {
    getArtist1()
      .then(result => {
          console.log({result})
        res.json(result.rows);
      })

      .catch(err => console.log("err:", err));
  };
  
  module.exports = getTheArtist;