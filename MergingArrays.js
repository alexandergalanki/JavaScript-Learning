const firstArray=[1,2,3];
const secondArray=[4,5,6];

const firstWayToMerge=[...firstArray,...secondArray];
const secondWayToMerge=firstArray.concat(secondArray);
const thirdWayToMerge2=firstArray.push(...secondArray);

console.log(firstWayToMerge);
console.log(secondWayToMerge);
console.log(firstArray);//second array merged into first array
