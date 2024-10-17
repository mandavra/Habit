const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
      .connect("mongodb+srv://man:rL6LlQQ9QYjhQppV@cluster0.yxujymc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      .then(() => {
        console.log("db connect success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  module.exports = { connectDB };