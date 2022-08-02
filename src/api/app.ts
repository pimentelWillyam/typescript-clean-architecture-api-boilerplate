// importando .env
require("dotenv-safe").config({silent: true});

//importando core da api
import express from "express";
import {Express,Request,Response} from "express"
import bodyParser from "body-parser";
import cors from "cors"

// criando o app
export const app: Express = express()
app.use(bodyParser.json())
app.use(cors({
    origin: [`${process.env.HOST}`]
}))

app.get('/', ( req: Request, res: Response) =>{
    res.status(200).send({message: "Hello"})
})







