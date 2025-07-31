const express = require('express');
const bookRouter = require("./routes/book.route.js")
const databaseConnection = require("./database");
const app = express();
app.use(express.json());

databaseConnection();


app.get('/',(req,res)=>{
    res.send("hello you")
});

app.use("/book",bookRouter);

app.listen(8000,()=>{
    console.log("port listening on 8000");
});