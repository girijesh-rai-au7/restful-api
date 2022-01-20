// https://github.com/girijesh-rai-au7/restful-api
//create operation using post method
//Postman
const express = require('express');

const app = express()
const port = process.env.PORT||3000


const mongoose = require('mongoose')
//creates database named escaleDB
mongoose.connect('mongodb://localhost:27017/escaleDB',{useNewUrlParser:true})
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        
    },
    email:String,
    bio:String,
    profilePic:String

})
//class of the schema
const User = new mongoose.model("User",userSchema)
//creating new user
//data  
app.use(express.json())
//crud operations using Postman
app.post('/users', (req,res)=>{
    // res.send("hello")//in postman
  console.log(req.body)//get the data send  from postman in console
    const user = new User(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    });//data received from postman saved in database escaleDB
})
app.listen(port,()=>{
    console.log("server is running")
})