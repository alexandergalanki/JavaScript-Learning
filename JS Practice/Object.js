const Mark={
    fullName:"Mark",
    mass:78,
    height:1.69,
    bmi:function(){
        return this.mass/(this.height*this.height)
    }
};
const John={
    fullName:"Mark",
    mass:92,
    height:1.95,
    bmi:function(){
        return this.mass/(this.height*this.height)
    }
};

console.log(Mark.bmi());
console.log(John.bmi());

