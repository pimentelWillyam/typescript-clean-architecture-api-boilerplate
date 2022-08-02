import {app} from "./api/app"

app.listen(process.env.PORT, () =>{
    console.log(`Escutando na porta ${process.env.PORTA}`)
})