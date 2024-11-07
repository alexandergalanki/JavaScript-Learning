//method - object
const obj={
    fun:function(){
        console.log(this);
        function inner(){
            console.log(this);
        }   
        inner(); 
    },
    age:25,
    email:"javascript@js.com"
}
obj.fun();