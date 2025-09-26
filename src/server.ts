import express from "express"

import {} from "./middlewares/my-middleware"
import { myMiddleware } from "./middlewares/my-middleware.js"

const PORT = 3333

const app = express()
app.use(express.json())

app.use(myMiddleware)


app.get("/products", (request, response) => {

  const { page, limit } = request.query

  response.send(`Página ${page} de ${limit}`)
})

app.post("/products", (request, response) => {
    const { name, price } = request.body

    //response.send(`O produto ${name} custa ${price}`)

    response.status(201).json({ name, price})
})

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})