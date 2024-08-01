function square(a){
    return a*a;
  }
  function cube(a){
    return a*a*a;
  }
  
  function calculate(A,B,fn){
    let value1=fn(A);
    let value2=fn(B);
    return value1+value2;
  }
//function square as argument  
let ans1=calculate(1,2,square);
console.log(`Value of Square: ${ans1}`);
//function cube as argument
let ans2=calculate(1,2,cube);
console.log(`Value of Cube : ${ans2}`);
