const mongoose = require("mongoose");
require("dotenv").config();

const mongo = process.env.MONGO;

//Connection
try {
  mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  //Testing connection
  console.log(`Connect to MongoDB...`);
} catch (err) {
  console.log(`Could not connect to MongoDB...`, err);
}
