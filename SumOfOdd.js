// Sum of odd numbers in a given String
let newStr="1234569";
newStr=newStr.split("");
let sum=0;
for(let i=0;i<newStr.length;i++){
  if(parseInt(newStr[i]) %2 !== 0 ){
    sum=sum+parseInt(newStr[i]);
  }
}
console.log(sum);