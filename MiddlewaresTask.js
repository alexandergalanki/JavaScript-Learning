const express= require('express')
const app= express();
const port=3000;
let Count=0

function requestCount(username,password){
    Count+=1;
}
app.use(requestCount);

app.get("/user",function(req,res){
    res.json({
        requestCount:count
    })
})
