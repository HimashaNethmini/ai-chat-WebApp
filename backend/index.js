import express from "express"
import cors from "cors"
import ImageKit from "imagekit";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;
const app = express();

//use cors for origin
app.use (
    cors ({
        origin: process.env.CLIENT_URL,
    })
);

//mongoose connection
const connect = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("Connected to DB");
    }
    catch (err) {
        console.log(err)
    }

}

//mapping with the imagekit credentials
const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
})

//endpoint for upload
app.get("/api/upload",(req,res)=>{
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
});

//endpoint for chats
app.post("api/chats", (req, res) => {
    const {text} = req.body
    console.log(text)
});

app.listen(port, ()=>{
    connect()
    console.log("App is running on", port)
})