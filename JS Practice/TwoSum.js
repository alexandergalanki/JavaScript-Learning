const arr=[1,3,2,4,5];
const targetVal=9;
function Twosum(nums,target){
 for(let i=0;i<nums.length-1;i++){
    let indexArr=[];
    let numsecIndex=i+1;
    if(target===nums[i]+nums[numsecIndex]){
        let indexVal1=i;
        indexArr=[indexVal1,numsecIndex];
        return indexArr;
    }
 }
 return "wrong traget value"
}
const result=Twosum(arr,targetVal);
console.log(result);