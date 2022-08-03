// importando core da rota
import * as express from "express"
import { Request, Response } from "express"

//importando service da rota
import {DialogoController} from "../controllers/DialogoController"
const dialogoController = new DialogoController()

//criando rotas
export const dialogoRoute  = express.Router()

dialogoRoute.post("/dialogo", (req: Request,res: Response) => {dialogoController.postaDialogo(req,res)})