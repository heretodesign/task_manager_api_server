const express = require('express')
require("./db/mongoose")

const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()

//rego middleware
app.use((req, res, next) => {
    if (req.method === "GET") {
        res.send("GET requests are disabled")
    } else {
        next()
    }
})

// middleware when site is on maintainance
app.use((req, res, next) => {
    res.status(503).send("Site is currently down. Check back soon!")
})

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

// with middleware: new request -> do something -> run route handler


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is up on port " + PORT)
})


