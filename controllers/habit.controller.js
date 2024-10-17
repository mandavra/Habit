const { habitservice } = require("../services");
const {sendReminderEmail} = require("../services/email.service");
const addhabit = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const habit = await habitservice.addhabit(body);
    
    if (user) {
      
        const email = await sendReminderEmail(user.email);
        console.log("mail forwered ", email.envelope);
      }
    console.log(req.body);
  
    res.status(201).json({
      message: "habit Created success",  
      data: habit,
    })
  
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};


const gethabit = async (req, res) => {
  const token = req.cookies["access-token"];

  if (!token) {
    res.status(500).json({
      mesasge: "you are not login",
    });
  }

  const habit = await verifyToken(token);

  console.log(habit, "habit");

  res.status(200).json({ message: "habit get success", habit });
  };
  


  const deletehabit = async (req, res) => {

  
    let id = req.params.id;
  
    const habit = await habitservice.deletehabit(id);
  
  
    console.log(habit, "delete");
  
    res.status(200).json({
      message: "habit delete success",
      data: habit,
    });
  };  
   
const updatehabit = async (req, res) => {
  console.log(req.body)
  console.log(req.params);

  let body = req.body
  let { id } = req.params

  let habit = await habitservice.updatehabit(body, id)

  res.status(200).json({
      message: "habit updated success",
      habit
  })


}
module.exports = { addhabit,gethabit,deletehabit,updatehabit};