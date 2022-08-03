// importando core da rota
import * as express from "express"
import { Request, Response } from "express"

//importando service da rota

import {ExemploController} from "../controllers/ExemploController"
const exemploController = new ExemploController() 

//criando rotas
export const exemploRota  = express.Router()

exemploRota.post("/dialogo", (req: Request,res: Response) => {exemploController.postaDialogo(req,res)})