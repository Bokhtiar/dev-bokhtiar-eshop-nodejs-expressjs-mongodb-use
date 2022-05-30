const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const appRouter = require('./src/routes')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json());
app.use("/api/v1", appRouter)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const PORT = 4000
app.listen(PORT, () => {
    console.log(`server runing ${PORT}`)
})

app.get('/', async (req, res) => {
    res.send("Wow!😯 are you here🙃🙃 but you have no access!!! 😜😜😜")
})

app.use((req, res, next) => {
    let error = new Error('404 page Not Found')
    error.status = 404
    next(error)
})


app.use((error, req, res, next) => {

    if (error.status == 404) {
        return res.status(404).json({
            status: false,
            errors: { message: error.message }
        })
    }

    if (error.status == 400) {
        return res.status(400).json({
            status: false,
            errors: { message: "Bad request" }
        })
    }

    if (error.status == 401) {
        return res.status(401).json({
            status: false,
            errors: { message: "You have no permission." }
        })
    }

    return res.status(500 || 501).json({
        status: false,
        errors: { message: "Internal server error." }
    })

})

mongoose.connect(process.env.DB_URL)
    .then(() => console.log("Database connected"))
    .catch(error => {
        if (error) console.log('Failed to connect DB')
    }) 