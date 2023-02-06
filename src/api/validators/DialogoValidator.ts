import { Request } from "express";

class DialogueValidator{
    isSalute(req: Request){
        if (req.body.mensagem === "bom dia"){
            return true
        }
        else{
            return false
        }
    }
}

export default DialogueValidator