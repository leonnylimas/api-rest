import express, { Request, Response, NextFunction } from "express"
import { routes } from "./routes"
import { AppError } from "./utils/AppError"
import { ZodError } from "zod"

const app = express()

app.use(express.json())

app.use(routes)


const PORT = 3333

app.use((error:any, request: Request, response: Response, next: NextFunction) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({ message: error.message})
    }

    if(error instanceof ZodError){
        return response.status(400).json({ 
            message: "Validation error!", 
            // 🛑 Use .flatten().fieldErrors para uma resposta REST limpa
            issues: error.flatten().fieldErrors 
        })
    }
    response.status(500).json({ message: error.message})
})


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))