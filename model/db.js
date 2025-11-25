const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CON;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

module.exports = mongoose;