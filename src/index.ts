import app from "./api/app"

app.listen(process.env.PORT, () =>{
    console.log(`Escutando no host ${process.env.HOST} porta ${process.env.PORTA}`)
})