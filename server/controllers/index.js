const express = require("express");
const {getTheArtist} = require("./routes");
const {getArtist1} = require("../database/queries/getArtist");
const {postArtist1} = require("../database/queries/postArtist");


const router = express.Router();

console.log('controller index')
// router.get('/artist',getTheArtist);//
router.post("/artist", (req, res) => {
    console.log(req.body.name)
    getArtist1(req.body.name)
    .then((result)=> {
        res.json(result.rows)
    })
    .catch((err)=>{
      console.log({err})
    })
  });

// router.post("/create-user", user.add);
router.post("/addartist", (req, res) => {
    console.log(req.body)
    postArtist1(req.body)
    .then((result)=> {
        res.json(result.rows)
    })
    .catch((err)=>{
      console.log({err})
    })
  });
module.exports = router;
