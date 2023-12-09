// importando core da rota
import * as express from "express"
import { Request, Response } from "express"

//importando service da rota
import DialogueController from "../controllers/LogController"
const dialogueController = new DialogueController()

//criando rotas
const dialogueRoutes  = express.Router()

dialogueRoutes.post("/dialogue", (req: Request,res: Response) => {dialogueController.postaDialogue(req,res)})

export default dialogueRoutes