import {Response} from "express"

export class DialogoService{
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