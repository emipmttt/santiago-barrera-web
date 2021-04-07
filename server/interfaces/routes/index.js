const users = require("./users.js");

const express = require("express");
const app = express();

app.use('/user', users);

module.exports = app;
