const jwt=require("jsonwebtoken");

const value={
    name:"bobby",
    accNum:"123123123"
}
const token=jwt.sign(value,"secret");
console.log(token);