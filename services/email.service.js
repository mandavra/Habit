const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "mandavra12@gmail.com",
    pass: "ljld[]sssssseutyqcfwxwus",
  },
});


const sendReminderEmail = async (email, habitName) => {
  const mailOptions = {
    from:"<mandavra12@gmail.com>",
    to: email,
    subject: "Habit Reminder",
    text: 'Hi! Just a friendly reminder to complete your habit: ${habitName}',
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Reminder email sent to", email);
  } catch (error) {
    console.error("Error sending reminder email:", error);
  }
};

module.exports = {
  sendReminderEmail
}




