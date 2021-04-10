const users = require("./users.js");
const projects = require("./projects");

const express = require("express");
const app = express();

app.use('/user', users);
app.use('/projects', projects);

module.exports = app;
