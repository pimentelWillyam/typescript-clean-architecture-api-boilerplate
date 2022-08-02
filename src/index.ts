// importando .env
require("dotenv-safe").config({silent: true});

//importando core da api
import {Request,Response} from "express";
const express = require("express")
const cors = require("cors")

const app = express()

app.get('/', ( req: Request, res: Response) =>{
    res.status(200).send({message: "Hello"})
})

app.use(cors({
    origin: [`${process.env.LOCALHOST}`]
}))

app.listen(process.env.PORT, () =>{
    console.log(`Escutando na porta ${process.env.PORTA}`)
})


