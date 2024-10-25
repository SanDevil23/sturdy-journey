const express = require("express");
const vRoutes = require("./routes/visitorRoutes")
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/mysql-db-connection');

// dotenv config
require('dotenv').config()

// database connection instance
db.connectDb();

// express instance
const app = express();

// json body parser
app.use(express.json())

// CORS config
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,                               
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



app.get('/', (req, res) => {
    res.send("Hello ! This is the server route. ");
    res.status(200);
})

// routes
app.use("/api/v1/visitor", vRoutes);


const port = process.env.PORT;
app.listen(port, console.log(`The server is up and running on PORT ${port}`));