let arr=[1,2,4,6,7,10,11,0,1];
let minvalue=0;
let minValIndex=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]<=minvalue){
        minvalue=arr[i];
        minValIndex=i;
    }
}
console.log(`Min Value:${minvalue} ,Index of Min Value:${minValIndex}`);