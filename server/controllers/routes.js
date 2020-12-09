
const { getArtist1 } = require("../database/queries/getArtist");
// const { postData } = require("../database/queries/postData");


 getTheArtist = (req, res) => {
    getArtist1()
      .then(result => {
          console.log({result})
        res.json(result.rows);
      })

      .catch(err => console.log("err:", err));
  };
  
  module.exports = getTheArtist;