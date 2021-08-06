require('./configs/dotenv')
const express = require("express");
const app =express();
const cors =require("cors");
const authRoutes =require("./routes/auth");
const client = require("./configs/db");
const noteRoutes= require("./routes/note")


app.use(express.json());
app.use(cors());

const port=process.env.PORT || 8000;

app.get('/' ,(req,res)=>{
    res.status(200).send("Server is  up and running");
});

app.use("/auth",authRoutes);
app.use("/note",noteRoutes);

client.connect(()=>{
console.log("connected to db!");
})


app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
});