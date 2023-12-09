import {Request,Response} from "express"

import DialogueValidator from "../../domain/validators/LogValidator"
const dialogueValidator = new DialogueValidator()

import DialogueService from "../../application/services/LogService"
const dialogueService = new DialogueService()

class DialogueController{
    postaDialogue(req: Request, res: Response){
        if (dialogueValidator.isSalute(req)){
            dialogueService.salute(res)
        }
        else{
            dialogueService.farewell(res)
        }
    }

}

export default DialogueController