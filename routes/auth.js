const express = require("express");
const { signUp  , signIn} = require("../controllers/auth");
const router= express.Router();

router.post("/signup", signUp)
router.post("/signip", signIn);

//Middleware
module.exports=router;

// localhost:8000/auth/signup
// localhost:8000/auth/signup