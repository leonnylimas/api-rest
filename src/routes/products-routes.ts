import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middleware"

const productsRoutes = Router()

productsRoutes.get("/", (request, response)=> {

})

productsRoutes.post("/", myMiddleware, (request, response)=> {
    const { name, price } = request.body

    return response.json({
        name,
        price,
        user_id: request.user_id
    })
})

export { productsRoutes }

