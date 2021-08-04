const express = require("express");
const app =express();
const cors =require("cors");

app.use(express.json());
app.use(cors());

const port=process.env.PORT || 8000;

app.get('/' ,(req,res)=>{
    res.status(200).send("Server is  up and running");
});


app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
});