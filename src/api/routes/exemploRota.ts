// importando core da rota
import * as express from "express"

//importando service da rota
import {ExemploService} from "../services/exemploService"

const exemploService: ExemploService = new ExemploService()

//criando rotas
export const exemploRota  = express.Router()

exemploRota.get("/saudacao", (req,res) => {res.send("oi")})