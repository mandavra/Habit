const express = require("express");
const routes = express.Router();
const userRoutes = require("./user.route");
const habitRoutes =require('./habit.route')


routes.use("/user", userRoutes);
routes.use("/habit",habitRoutes)


module.exports = routes;
    