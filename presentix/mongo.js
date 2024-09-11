const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/presentix", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.error("Database Connection Error:", error);
  });

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("users", usersSchema);

module.exports = collection;
