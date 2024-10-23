require('dotenv').config()

const CONFIG = {
    USER: process.env.MYSQL_USERNAME,
    HOST: process.env.MYSQL_HOST,
    DATABASE: process.env.MYSQL_DB,
    PASS: process.env.MYSQL_PASSWORD
}


module.exports = CONFIG;