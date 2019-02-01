const mailer = require("nodemailer");
require("dotenv").config();
const { welcome } = require('./welcome_template');

const getEmailData = (to, name, token, template) => {
  let data = null;

  switch (template) {
    case "welcome":
      data = {
        from: "Guitar Waves <guitar.waves.info@gmail.com>",
        to,
        subject: "sending a test email",
        text: `Hi ${name}.  Welcome to Gutair Waves!`,
        html: welcome()
      };
      break;
    default:
      data;
  }
  return data;
};

const sendMail = (to, name, token, type) => {
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: "guitar.waves.info@gmail.com",
      pass: process.env.EMAIL_PASS
    }
  });
  const mail = getEmailData(to, name, token, type);

  smtpTransport.sendMail(mail, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent!");
    }
    smtpTransport.close();
  });
};

module.exports = { sendMail };
