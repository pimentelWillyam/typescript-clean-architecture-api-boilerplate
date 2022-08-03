// importando .env
require("dotenv-safe").config({silent: true});

// importando rotas
import {exemploRota} from "./routes/exemploRota";

//importando core da api
import * as express from "express"
import * as bodyParser from "body-parser";
import * as cors from "cors"

// criando o app
export const app = express()

//app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

//utilizando rotas da api
app.use("/api", exemploRota) 







