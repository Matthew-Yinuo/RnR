import * as nodemailer from "nodemailer";

export const sendEmail = async (
  recipient: string,
  url: string,
  linkText: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "w10621405@gms.ndhu.edu.tw",
      pass: "W1062140500"
    }
  });

  const message = {
    from: "Sender Name <sender@example.com>",
    to: `Recipient <${recipient}>`,
    subject: "Nodemailer is unicode friendly ✔",
    text: "Hello to myself!",
    html: `<html>
        <body>
        <p>Testing SparkPost - the world's most awesomest email service!</p>
         <a href="${url}">${linkText}</a>
        </body>
        </html>`
  };

  transporter.sendMail(message, err => {
    if (err) {
      console.log("Error occurred. " + err.message);
    }
  });
};
