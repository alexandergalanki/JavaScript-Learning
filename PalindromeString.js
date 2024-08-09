const str="majdam";
let newStr=str.split('').reverse().join('');
if(str===newStr){
    console.log("Given string is palindrome");
}
else{
    console.log("Not Palindrome");
}