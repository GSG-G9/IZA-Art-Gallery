const express = require("express");
const {getTheArtist} = require("./routes");
const {getArtist1} = require("../database/queries/getArtist");


const router = express.Router();

console.log('controller index')
// router.get('/artist',getTheArtist);//
router.get("/artist", (req, res) => {
    console.log(req.body)
    getArtist1(req.body.name)
    .then((result)=> {
        res.json(result.rows)
        console.log({result})
    })
    .catch((err)=>{
      console.log({err})
    })
  });
// router.post("/create-user", user.add);

module.exports = router;
