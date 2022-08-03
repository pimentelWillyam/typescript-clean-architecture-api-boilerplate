import {Request,Response} from "express"

const ExemploService: Object = () =>{

    const cumprimenta = (req: Request, res: Response) =>{
        res.status(200).json({
            message:"oi"
        })
    }
}

export default ExemploService