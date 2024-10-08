const fruits=["apple","orange","banana","Sweets"]

Array.prototype.myPop=function(){
    if(this.length===0){
        return undefined;
    }else{
        let lastIndex=this.length-1;
        let popElement=this[lastIndex];
        this.length=lastIndex;
        return popElement;
    }
}

fruits.myPop();
console.log(fruits);