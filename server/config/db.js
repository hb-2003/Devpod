const mongoose = require("mongoose");
// Replace this with your MONGOURI.

const MONGO_URI = "mongodb://127.0.0.1:27017/DUHacks";

mongoose.set("strictQuery", false);
exports.connect = () => {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Error connecting to MongoDB");
  });
  connection.once("open", () => {
    console.log("Connected to MongoDB");
  });
  return connection;
};
