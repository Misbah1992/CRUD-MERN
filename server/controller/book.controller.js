const { Book } = require("../model/book.model.js")

const handleBookController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.BookName || !body.BookTitle || !body.Author || !body.SellingPrice) {
            return res.status(400).json({ Message: "All feilds required", Success: false })
        }
        const bookAdd = await Book.insertOne(body);

        if(bookAdd){
            return res.status(201).json({ Message: "data inseted successfully", Success: true,Id:bookAdd?._id });
        }
        console.log(bookAdd, "bookAdd")
    } catch (error) {
        return res.status(500).json({ Message: error.message, Success: false })
    }
};

module.exports = { handleBookController }