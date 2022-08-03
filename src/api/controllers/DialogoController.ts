import {Request,Response} from "express"

import {DialogoValidator} from "../validators/DialogoValidator"
const dialogoValidator = new DialogoValidator()

import { DialogoService } from "../services/DialogoService"
const dialogoService = new DialogoService()

export class DialogoController{
    postaDialogo(req: Request, res: Response){
        if (dialogoValidator.eSaudacao(req)){
            dialogoService.saudacao(res)
        }
        else{
            dialogoService.despedida(res)
        }
    }

}