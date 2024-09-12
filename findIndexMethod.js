function findIndexMethod(){
    let arr=[{id:1,name:"bobby"},{id:2,name:"Alex"}];
    const data=arr.findIndex((x)=>x.id==2);
    console.log(data);
}

findIndexMethod();