const express = require("express"),
authenticationRouter = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const User= require('../model/user');

//Method to generate JWT token
authenticationRouter.post("/", async function (req, res) {

    //get auth user details
    const { email, password } = req.body.user;

    if (email == undefined || email == '') { res.status(401).send({ errorCode: "2001", errorMessage: "cecId Not Found" }) }
    else {
        //Check if user is a valid user in DB
        User.find({"email":email,"password":password}, async function (err, data) {
            if(data[0]!=undefined){
                 //Create JWT token based on the payload and secret key
                 const jwtToken = jwt.sign(JSON.stringify(data[0]), config.jwt.access_token_secret);
                 res.send({ token: jwtToken, refreshToken: jwtToken });
            }else{
                res.send({ message:"not a valid user" });
            }
        });
    }

});




module.exports = authenticationRouter;    