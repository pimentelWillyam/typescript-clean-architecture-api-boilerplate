import {Request,Response} from "express"

import {ExemploValidator} from "../validators/ExemploValidator"
const exemploValidator = new ExemploValidator()

import { ExemploService } from "../services/ExemploService"
const exemploService = new ExemploService()

export class ExemploController{
    postaDialogo(req: Request, res: Response): void{
        if (exemploValidator.eSaudacao(req)){
            exemploService.saudacao(res)
        }
        else{
            exemploService.despedida(res)
        }

        
    }

}