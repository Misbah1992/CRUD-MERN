const { Book } = require("../model/book.model.js")

const handleBookController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.BookName || !body.BookTitle || !body.Author || !body.SellingPrice) {
            return res.status(400).json({ Message: "All feilds required", Success: false })
        }
        const bookAdd = await Book.create(body);

        if (bookAdd) {
            return res.status(201).json({ Message: "data inserted successfully", Success: true, Id: bookAdd?._id });
        }
        console.log(bookAdd, "bookAdd")
    } catch (error) {
        return res.status(500).json({ Message: error.message, Success: false })
    }
};

const handleBookListController = async (req, res) => {
    try {
        const bookList = await Book.find({});
        return res.status(200).json({
            Message: "All books data", Success: true,
            BookList: bookList
        })
    } catch (error) {
        return res.status(400).json({ Message: error.message, Success: false })
    }
};

const handleBookDeleteController = async (req, res) => {
    const body = req.body
    try {
        const deleted = await Book.deleteOne({ _id: body.Id })

        if (deleted.acknowledged) {
            return res.json({
                Message: "book deleted",
                Success: true
            })
        }
    } catch (err) {
        return res.status(400).json({ Message: err.message, Success: false })
    }
}
const handleBookUpdateController = async (req, res) => {
    try {
        const  body = req.body;
        console.log(body)
       
        const updating = await Book.findByIdAndUpdate({ _id: body?._id }, {
            $set: body
        });
        console.log("updating",updating)
        if (updating?.acknowledged) {
            return res.json({
                Message: "Book updated",
                Success: true,

            })
        }
    } catch (error) {
        return res.status(500).json({ Message: error.message, Success: false })
    }
}
module.exports = { handleBookController, handleBookListController, handleBookDeleteController,handleBookUpdateController }