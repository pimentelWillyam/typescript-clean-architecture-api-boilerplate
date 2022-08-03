// importando core da rota
import * as express from "express"
import {Request,Response,Router} from "express"

//importando service da rota
import ExemploService from "../services/exemploService"

//criando rotas
const exemploRota: Router = express.Router()

exemploRota.get("/cumprimento", (req: Request, res: Response) => {console.log("oi")})

export default exemploRota