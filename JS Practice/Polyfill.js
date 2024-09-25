const arr=[1,1,[2,2,[3,3],2],1,1];

function flatArray(arr,depth){
    if(depth===0){
        return arr;
    }
    let temp=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            const result=flatArray(arr[i],depth-1)
            temp.push(...result);
        }else{
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(flatArray(arr,1));
