let inputString="Hi User! Welcome to X.COM(formerlyTwitter)";
const newString=inputString.split(" ");
let finalString="";
console.log(newString);

for(let i=0;i<newString.length;i++){
  if(newString[i].length>finalString.length){
    finalString=newString[i];
  }
}
console.log(finalString)