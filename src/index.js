const express = require('express')
require("./db/mongoose")

const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()
app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is up on port " + PORT)
})
