import { Request, Response, NextFunction } from "express"
import { z } from "zod"


class ProductsController{

  index(request: Request, response: Response, next: NextFunction){} 
    
  create(request: Request, response: Response, next: NextFunction){


    const bodySchema = z.object({
          name: z.string({
            required_error: "Name is required.", 
            invalid_type_error: "Name must be a string."})
           .trim()
           .min(6, {message: "Name must be at least 6 characters."}),

          price: z.number({
            // Mensagem quando o campo 'price' está faltando
            required_error: "Price is required.", 
            // Mensagem quando 'price' está presente, mas não é um número (ex: "abc")
            invalid_type_error: "Price must be a number."
          }).positive({message: "Price must be greater than zero."})
 })

    const { name, price } = bodySchema.parse(request.body)



    return response.status(201).json({
        name,
        price,
        user_id: request.user_id
    })
  }

}

export { ProductsController }