require("dotenv").config()

const cors = require("cors")
const express = require("express")
const routes = require("./routes")

// express app
const app = express()
const PORT = process.env.PORT

// middleware
app.use(cors({ credentials: true, origin: "*" }))
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/upload", routes)

// server
app.listen(PORT, () => {
    console.log(`Image microservice listening on http://localhost:${PORT}...`)
})