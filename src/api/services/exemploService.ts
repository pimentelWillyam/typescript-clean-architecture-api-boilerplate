import {Request,Response} from "express"

export class ExemploService{
    saudacao(res: Response){
        res.status(200).json({
            message:"opa, tudo bom?"
        })
    }
    despedida(res: Response){
            res.status(200).json({
                message: "tchau"
            })
    }
}