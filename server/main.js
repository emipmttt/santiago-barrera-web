const routes = require("./interfaces/routes/index");
const express = require('express');
const morgan = require("morgan");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(routes);

module.exports = app;
