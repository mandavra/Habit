const express = require("express");
const validate = require("../middlewares/validate");
const { habitValidation } = require("../validations");
const { habitController } = require("../controllers");

const route = express.Router();

route.post("/add", validate(habitValidation.addhabit), habitController.addhabit);
route.get("/get", habitController.gethabit);
route.delete("/delete/:id", habitController.deletehabit);
route.put('/update/:id', habitController.updatehabit)
module.exports = route;