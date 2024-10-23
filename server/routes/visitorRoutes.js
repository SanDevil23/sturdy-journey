const express = require('express');
const router = express.Router();

const {addVisitor} = require('../controllers/visitorController')

router.post("/add", addVisitor);

module.exports = router