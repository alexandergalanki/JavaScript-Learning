const express=require('express');
const app= express();
const port = 3000;

let totalErrCount=0;

app.get("/user",function(req,res){
    throw new Error("user not found");
    res.json({
        msg:"hi user"
    })
})
//error handling middleware
app.use(function(err,req,res,next){
    totalErrCount+=totalErrCount;
    res.status(404).send({})
})
app.listen(port);