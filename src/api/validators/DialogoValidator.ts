import { Request } from "express";

export class DialogoValidator{
    eSaudacao(req: Request){
        if (req.body.mensagem === "bom dia"){
            return true
        }
        else{
            return false
        }
    }
}