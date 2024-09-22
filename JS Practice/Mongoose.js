const mongoose =require("mongoose");
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const port=3000;
app.use(express.json());
mongoose.connect('mongodb+srv://admin:Bobby%401475@cluster0.qubrjbi.mongodb.net/test')

const userSchema=new mongoose.Schema({
    name:String,
    password:String 
})

const User=mongoose.model("users",userSchema);

app.post("/signup",async (req,res)=>{
 const username=req.body.username;
 const password=req.body.password;
 console.log(username,password);
 //const name=req.body.name;
 const existingUser=await User.findOne({name:username});
 console.log(existingUser);
 if(existingUser){
    return res.json({
        user:"already exists"
    })
 }
 await User.create({
    name:username,
    password:password
 })
 res.json({
    msg:"done"
 })
});


app.listen(port);

