function findMethod(){
    let arr=[{id:1,name:"bobby"},{id:2,name:"Alex"}];
    const data=arr.find((x)=>x.id==2);
    console.log(data);
}

findMethod();