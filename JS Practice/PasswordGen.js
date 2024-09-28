const letters="abcdefghijklmnopqrstuvwxyz".split("");
const nums=[0,1,2,3,4,5,6,7,8,9];
const symbols=["!","@","#","$","%","^","&","*",];
let [lets,num,sym]=[5,5,5];
function passGen(arr,val){
    let passStr=""
    for(let i=0;i<val;i++){
        let randomEle=arr[Math.floor(Math.random()*arr.length)];
        passStr=passStr+randomEle;
    }
    return passStr;
}

let passStr=passGen(letters,lets);
let passNum=passGen(nums,num);
let passSym=passGen(symbols,sym);
let passwordString=passStr+passNum+passSym;
console.log(passwordString);


