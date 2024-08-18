function maxNum(arr){
    let maxNum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxNum){
            maxNum=arr[i];
        }
    }
    console.log(`Largest number in the given array is `+ maxNum);
}
let sampleArray=[1,10,65,3,5,9,22];

maxNum(sampleArray);