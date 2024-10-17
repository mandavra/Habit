const { habitSchema } = require("../models");

const addhabit = (body) => {
  return habitSchema.create(body);
};

const gethabit = () => {
  return habitSchema.find();
};

const deletehabit = (id) => {
  return habitSchema.findByIdAndDelete(id);
};

const updatehabit = (body, id) => {

  return habitSchema.findByIdAndUpdate(id, { $set: body })

}


module.exports = { addhabit, gethabit, deletehabit,updatehabit};