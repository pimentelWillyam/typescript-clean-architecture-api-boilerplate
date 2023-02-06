import {Response} from "express"

class DialogueService{
    salute(res: Response){
        res.status(200).json({
            message:"opa, tudo bom?"
        })
    }
    farewell(res: Response){
            res.status(200).json({
                message: "tchau"
            })
    }
}

export default DialogueService