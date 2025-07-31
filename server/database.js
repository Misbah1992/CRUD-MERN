const mongoose = require('mongoose')

const databaseConnection = async () => {

    await mongoose.connect("mongodb+srv://user404:password404@cluster404.lh9pjul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster404")
        .then(() => {
            console.log("database connected successfully")
        }).catch((err) => {
            console.log("connection failed")
        });
}

module.exports = databaseConnection;