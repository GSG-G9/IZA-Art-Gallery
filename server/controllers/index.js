const express = require("express");
const { getTheArtist } = require("./routes");
const {
  getArtist1,
  getArtistByName,
} = require("../database/queries/getArtist");
const { postArtist1 } = require("../database/queries/postArtist");

const router = express.Router();

//console.log("controller index");
// router.get('/artist',getTheArtist);//
router.get("/artist", (req, res) => {
  getArtist1()
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      console.log({ err });
    });
});
router.get("/artist/:search", (req, res) => {
  const valueName = req.params.search;
  getArtistByName(valueName)
    .then((result) => {
      console.log(result.rows)
       res.json(result.rows);
    })
    .catch((err) => {
      console.log({ err });
    });
});
// router.post("/create-user", user.add);
router.post("/artist", (req, res) => {
  postArtist1(req.body)
    .then((result) => {
      console.log(result.rows);
      res.redirect('artist.html');
    })
    .catch((err) => {
      console.log({ err });
    });
});
module.exports = router;
