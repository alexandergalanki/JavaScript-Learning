const arr=[1,2,3,4,5];
function DupEle(arr){
    let UniValue=[];
    arr.forEach(element => {
        if(!UniValue.includes(element)){
            UniValue.push(element);
        }
    });
    if(arr.length==UniValue.length){
        return false;
    }else{
        return true;
    } 
}
console.log(DupEle(arr));