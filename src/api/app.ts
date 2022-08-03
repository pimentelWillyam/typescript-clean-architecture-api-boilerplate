// importando .env
require("dotenv-safe").config({silent: true});

//importando core da api
import  {Express} from "express";
import * as express from "express"
import * as bodyParser from "body-parser";
import * as cors from "cors"

// importando rotas
import exemploRota from "./routes/exemploRota";

const app: Express = express()
app.use(bodyParser.json())
app.use(cors({
    origin: [`${process.env.HOST}`]
}))

//utilizando rotas da api
app.use("/api",exemploRota)

export default app







