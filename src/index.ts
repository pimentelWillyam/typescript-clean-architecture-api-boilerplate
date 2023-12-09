import app from "./api/view/app"

app.listen(process.env.PORTA, () =>{
    console.log(`aplicação iniciada na porta ${process.env.PORTA}`)
})