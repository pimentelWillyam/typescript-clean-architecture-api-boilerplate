import {Request,Response} from "express"

export class ExemploService{
    sauda(req: Request, res: Response){
        res.status(200).json({
            message:"oi"
        })
    }
    despede(req: Request, res: Response){
            res.status(200).json({
                message: "tchau"
            })
    }
}