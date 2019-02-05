const mailer = require("nodemailer");
require("dotenv").config();
const { welcome } = require('./welcome_template');
const { purchase } = require('./purchase_template');
const { resetPassword } = require('./resetPassword-template');

const getEmailData = (to, name, token, template, actionData = null) => {
  let data = null;

  switch (template) {
    case "welcome":
      data = {
        from: "Guitar Waves <guitar.waves.info@gmail.com>",
        to,
        subject: `${name}, welcome to Waves!`,
        html: welcome()
      };
      break;
      case "purchase":
        data = {
          from: "Guitar Waves <guitar.waves.info@gmail.com>",
          to,
          subject: `${name}, thanks for shopping with us!`,
          html: purchase(actionData)
        };
      break;
      case "reset_password":
      data = {
        from: "Guitar Waves <guitar.waves.info@gmail.com>",
        to,
        subject: `${name}, reset your password.`,
        html: resetPassword(actionData)
      };
      break;
    default:
      data;
  }
  return data;
};

const sendMail = (to, name, token, type, actionData) => {
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: "guitar.waves.info@gmail.com",
      pass: process.env.EMAIL_PASS
    }
  });
  const mail = getEmailData(to, name, token, type, actionData);

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
