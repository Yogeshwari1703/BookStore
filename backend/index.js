import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const port=process.env.PORT||4000;
const URI=process.env.MongoDBURI;

app.get('/', (req, res) => {
  res.send('Hello World 2')
})




// Not require for atlas cloude server only for compass
try{
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to mongoDB");
}catch(error){
    console.log("Error: ",error)
}


// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})