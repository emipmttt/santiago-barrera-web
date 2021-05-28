const users = require("./users.js");
const projects = require("./projects");
const settings = require("./settings");
const articles = require("./article");
const products = require("./products");

const express = require("express");
const app = express();

app.use('/user', users);
app.use('/projects', projects);
app.use("/settings", settings);
app.use("/article", articles);
app.use("/products", products)

module.exports = app;
