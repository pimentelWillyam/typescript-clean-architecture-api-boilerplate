import {Request,Response} from "express"

export class ExemploService{
    sauda(req: Request, res: Response){
        console.log("chegou aqui")
        res.status(200).json({
            message:"oi"
        })

    }
}