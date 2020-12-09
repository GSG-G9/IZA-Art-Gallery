const express = require("express");
const { join } = require("path");
const router = require("./controllers/index");
const bodyParser = require('body-parser')
const app = express();
require('env2')('./config.env');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(join(__dirname, "..", "public")));

app.set("port", process.env.PORT || 5110);

app.use(router);

module.exports = app;
