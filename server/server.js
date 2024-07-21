const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Hello");
})




app.listen(5000, console.log(`The server is up and running on PORT 5000`));