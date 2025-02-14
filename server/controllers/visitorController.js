const asyncHandler = require("express-async-handler");
const db = require('../config/mysql-db-connection');
const nodemailer = require('nodemailer');
const {google} = require('googleapis'); 

require('dotenv').config()

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN})


// storing visitor data in the database
const addVisitor = asyncHandler(async(req, res) => {

  // name, email, dob, org
  try {
    const {name, email, msg, org, orgName} = req.body;
    console.log(name, email, org, orgName);

    console.log(msg);

    // const insertQuery = 'INSERT INTO visitors (name, email, dob, org, orgName) VALUES(?,?,?,?,?)';
    // db.connection.query(insertQuery, [name, email, dob, org, orgName], (err, result) => {
    //   if (err){
    //     console.error('Error inserting data :', err);
    //     return res.status(500).send('Error inserting data into MySQL DB');
    //   }
    // })
    // res.status(200).send("Data Stored");

    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USERNAME,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
      }
    })

    const mailConfigurations = {
      from: 'SanDevil23 <poppybot94@gmail.com>',
      to: 'adhyasankalp23@gmail.com',
      subject: `Say Hello to ${name}`,
      text: `${msg} \nRegards & Thanks \nName: ${name}\nEmail: ${email}\nOrganization Type: ${org},\nOrganization Name: ${orgName}`,
      // html: `<p>${msg}</p>`,
      // 'text' and 'html' are both sent, and the client will decide which to display
    };

    transporter.sendMail(mailConfigurations, function(error, info) {
      if (error) {
        return res.status(500).send("ERROR in sending email");
      }
      console.log('Email Sent Successfully');
      res.status(200).send('Visitor data added and email sent');
    });
  } catch (err) {
      console.log(err);
      res.sendStatus(500)
  }
});  

module.exports = { addVisitor };
