const uniElement=()=>{
    const arr=[1,1,2,2,3,4,5,33,3,3,5,6,7];
    const uniqueObj={};
    const newArr=[];

    arr.forEach((val)=>{
        if(!uniqueObj[val]){
            uniqueObj[val]=true;
            newArr.push(val);
        }
    });
    console.log(uniqueObj);
    console.log(newArr);
}
uniElement();