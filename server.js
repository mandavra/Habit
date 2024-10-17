require("dotenv").config();
const http = require("http");
const express = require("express");
const { connectDB } = require("./db/db.connection");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cookieParser=require("cookie-parser")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cookie

app.use(cookieParser());
// Database connection file
connectDB();
app.use("/v1", routes);

http.createServer(app).listen(9001, () => {
  console.log("server started",9001);
}); 

