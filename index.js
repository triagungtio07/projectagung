//Import Dependencies
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

//Import routes
const router = require("./src/routes");

//Import data
const port = process.env.PORT || 3000;
const db = require("./src/config/database");

//Express
const app = express();

//BodyParser
app.use(bodyParser.json());

//Routes
app.use("/", router);

app.listen(port, () => console.log(`this app running on port ${port}`));
