function promisifiedfun(duration){
    const PPP=new Promise(function(resolve){
      setTimeout(function(){
        resolve("hi");
      },duration);
    })
    return PPP;
  }
  
  let ans=promisifiedfun(2000);
  ans.then(function(value){
    console.log(value);
  })