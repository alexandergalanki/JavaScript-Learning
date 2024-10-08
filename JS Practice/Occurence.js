let str="abbcccdda";
let newArr=str.split("");
let Arr=[];
let fullStr="";
let count=0;
newArr.forEach(element => {
    if(!(Arr.includes(element))){
        Arr.push(element);
    }
});
for(let i=0;i<Arr.length;i++){
    for (let index = 0; index < newArr.length; index++) {
        if(newArr[index]===Arr[i]){
            count+=1;
        }
    }
    fullStr=fullStr+Arr[i]+count;
    count=0;
}
console.log(fullStr.split(""));
