const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    isbn: String,
    description: String,
    published_date: String
})

const bookModel = mongoose.model('book', bookSchema)

module.exports = {
    bookModel
}