const express = require('express');
const {handleBookController,handleBookListController} = require("../controller/book.controller.js")

const router = express.Router();


router.post('/addbook',handleBookController)
router.get('/booklists',handleBookListController)

module.exports = router