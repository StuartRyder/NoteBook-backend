const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const tempData=[
    {
        name:"kunal",
        email:"kunal@gmail.com",
        password:"12345"
    },
    {
        name:"nikhil",
        email:"nikhil@gmail.com",
        password:"12345"
    },
    {
        name:"harsh",
        email:"harsh@gmail.com",
        password:"12345"
    },
    {
        name:"anurag",
        email:"anurag@gmail.com",
        password:"12345"
    },

]



exports.signUp=(req,res)=>{

    const { name, email, password}=req.body;
    console.log(name," ",email," ",password," ");

    //NOTE:check if the user already exists
    const isValid=tempData.findIndex((ele)=>(ele.email ===email));
    
    if(isValid !== -1 ){
        res.status(400).json({
            error:" User already exist"
        });
    }
    //Note:Generate Token
    const token = jwt.sign({ email:email, }, process.env.SECRET_KEY );
    // console.log(token);

    //Note:Hash password
    bcrypt.genSalt(10, function(err, salt) {
        if(err){
            res.status(500).json({error:"Internal Server Error"});
        }
        bcrypt.hash("B4c0/\/", salt, function(err, hash) {
            if(err){
                res.status(500).json({error:"Internal Server Error 1"});
            }
            const user={
                name,
                email,
                password:hash,
            }

            tempData.push(user);

            console.log(tempData);

            res.status(200).json({
                message:"User added succesfully",
                token: token,
            });
            // res.status(200).send(hash);
        });
    });
    //Note:Send response to user along with the token

    // res.send("sab sahi chala ")
}

exports.signIn=(req,res)=>{
    //To do  complete signip
}