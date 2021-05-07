const routes = require("./interfaces/routes/index");
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(routes);

module.exports = app;
