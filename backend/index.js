import express from "express"
import cors from "cors"
import ImageKit from "imagekit";

const port = process.env.PORT || 3000;
const app = express();

//use cors for origin
app.use (
    cors ({
        origin: process.env.CLIENT_URL,
    })
)

//mapping with the imagekit credentials
const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
})

//endpoint
app.get("/api/upload",(req,res)=>{
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
});

app.listen(port, ()=>{
    console.log("App is running on", port)
})