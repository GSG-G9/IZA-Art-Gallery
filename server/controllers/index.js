const express = require("express");
const { getTheArtist } = require("./routes");
const { error404, error500 } = require("./error.js");
const {
  getArtist1,
  getArtistByName,
} = require("../database/queries/getArtist");
const { postArtist1 } = require("../database/queries/postArtist");

const router = express.Router();

router.get("/artist", (req, res, next) => {
  getArtist1()
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      next(err);
    });
});
router.get("/artist/:search", (req, res, next) => {
  const valueName = req.params.search;
  getArtistByName(valueName)
    .then((result) => {
      console.log(result.rows);
      res.json(result.rows);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/artist", (req, res, next) => {
  postArtist1(req.body)
    .then(() => {
      res.redirect("/artist.html");
    })

    .catch((err) => {
      next(err);
    });
});

router.use(error404);
router.use(error500);
module.exports = router;
