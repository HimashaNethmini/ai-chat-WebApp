import express from "express"

const port = process.env.PORT || 3000;
const app = express();

//endpoint
app.get("/test",(req,res)=>{
    res.send("it works !")
})

app.listen(port, ()=>{
    console.log("App is running on", port)
})