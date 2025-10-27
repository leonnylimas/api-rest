import express from "express"

const app = express()

const PORT = 3333

app.get("/", (request, response)=> {
    response.send("Hello World Express!")
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))