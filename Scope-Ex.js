//Global Scope 
var x = "x variable is global scope variable.";   //Declaring variable outside the block
function globalScope(){
    console.log(x);                              //Accessing variable declared outside
}
globalScope();                                   //Calling globalScope Function

//--------------------------------------------------------------------------------------------

//Block Scope
function blockScope(){
    let y="y variablr is block scope variable.";  //Declaring variable within the block
    console.log(y);                              //Accessing variable within the block
}
blockScope();                                    //Calling blockScope Function