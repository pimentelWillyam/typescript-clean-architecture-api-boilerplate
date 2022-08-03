// importando core da rota
import * as express from "express"

//importando service da rota
import {ExemploService} from "../services/exemploService"

const exemploService = new ExemploService()

//criando rotas
export const exemploRota  = express.Router()

exemploRota.get("/saudacao", (req,res) => {exemploService.sauda(req,res)})
exemploRota.get("/despedida",(req,res) =>{exemploService.despede(req,res)})