const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: true,
    minlenght: [10, "Debe tener al menos 10 caracteres"],
  },
  punchine: {
    type: String,
    required: true,
    minlenght: [3, "Debe tener al menos 3 caracteres"],
  },
});

const Jokes = mongoose.model("Jokes", JokeSchema);

module.exports = Jokes;
