const express = require('express');
const {handleBookController} = require("../controller/book.controller.js")

const router = express.Router();


router.post('/addbook',handleBookController)

module.exports = router