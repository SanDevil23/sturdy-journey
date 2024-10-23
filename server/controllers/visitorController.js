const asyncHandler = require("express-async-handler");


const addVisitor = asyncHandler(async(req, res) => {
  // name, email, dob, org
  try {
    console.log("Add Visitor");
    const {name, email, dob, org} = req.body;
    console.log(name, email, dob, org);
    res.status(200).send("Data Received");
  } catch (err) {
      console.log(err);
      res.sendStatus(500)
  }
});  

module.exports = { addVisitor };
