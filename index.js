const express = require("express");
const app = express();
const db = require("./src/config/database");
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`this app running on port ${port}`));
