const express = require('express')
const app = express()
const routes = require('./routes')
const db = require('./config/connection.js')
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(routes)

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`App running on localhost:${PORT}`)
    })
})