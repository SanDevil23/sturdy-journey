const asyncHandler = require("express-async-handler");
const db = require('../config/mysql-db-connection');

// storing visitor data in the database
const addVisitor = asyncHandler(async(req, res) => {
  // name, email, dob, org
  try {
    console.log("Add Visitor");
    const {name, email, dob, org, orgName} = req.body;
    console.log(name, email, dob, org, orgName);

    const insertQuery = 'INSERT INTO visitors (name, email, dob, org, orgName) VALUES(?,?,?,?,?)';
    db.connection.query(insertQuery, [name, email, dob, org, orgName], (err, result) => {
      if (err){
        console.error('Error inserting data :', err);
        return res.status(500).send('Error inserting data into MySQL DB');
      }
    })
    res.status(200).send("Data Stored");
  } catch (err) {
      console.log(err);
      res.sendStatus(500)
  }
});  

module.exports = { addVisitor };
