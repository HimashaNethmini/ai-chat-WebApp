import express from "express"
import ImageKit from "imagekit";

const port = process.env.PORT || 3000;
const app = express();

//mapping with the imagekit credentials
const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
})

//endpoint
app.get("/api/upload",(req,res)=>{
    res.send("it works !")
})

app.listen(port, ()=>{
    console.log("App is running on", port)
})