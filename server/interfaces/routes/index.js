const users = require("./users.js");
const projects = require("./projects");
const settings = require("./settings");
const articles = require("./article");

const express = require("express");
const app = express();

app.use('/user', users);
app.use('/projects', projects);
app.use("/settings", settings);
app.use("/article", articles);

module.exports = app;
