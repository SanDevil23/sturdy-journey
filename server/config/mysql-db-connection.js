const mysql = require('mysql2');
const CONFIG = require('./keys.config');
// require('dotenv').config()


const connection = mysql.createPool({
    host:CONFIG.HOST,
    user:CONFIG.USER,
    password:CONFIG.PASS,
    database:CONFIG.DATABASE
}).promise()


const connectDb = async() => {
    const [rows] = await connection.query("SELECT * FROM visitors");
    console.log(rows);
}

module.exports = {connectDb, connection}
