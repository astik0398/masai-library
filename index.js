const express = require('express')
const { connection } = require('./db')
const { bookRouter } = require('./routes/book.route')

const app = express()
require('dotenv').config()
app.use(express.json())

app.use('/', bookRouter)

app.listen(process.env.PORT, async()=> {
    try {
        await connection
        console.log('connected to the db');
        console.log(`server running on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
})