const express = require('express')
const { bookModel } = require('../model/book.model')

const bookRouter = express.Router()

bookRouter.post('/books', async(req, res)=> {
    try {
        const newBook = new bookModel({
            ...req.body,
            published_date: new Date().toString()
        })

        newBook.save()
        res.send('book has been added')

    } catch (error) {
        res.send({"message": error})
    }
})

bookRouter.get('/books', async(req, res)=> {
    try {
        const books = await bookModel.find()
        res.send(books)
    } catch (error) {
        res.send({"message": error})
    }
})

bookRouter.get('/books/:id', async(req, res)=> {
    const {id} = req.params
    try {
        const singleBook = await bookModel.findById({_id: id})
        res.send(singleBook)
    } catch (error) {
        res.send({"message": error})
    }
})

module.exports = {
    bookRouter
}