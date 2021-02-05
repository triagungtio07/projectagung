const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  pster: {
    type: String,
    required: true,
  },
  trailer: {
    type: String,
    required: true,
  },
  cast: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  profit: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
