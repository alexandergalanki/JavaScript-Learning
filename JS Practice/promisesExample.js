function  fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve("Data is fetched succesfully");
            }else{
                reject("Api failed");
            }
        },3000)
    });
};

fetchData()
    .then((data)=>console.log(data))
    .catch((error)=>console.error(error));