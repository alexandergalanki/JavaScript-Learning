//finding maximum product of distinct elements in given array.

let arr=[1,9,2,3,4,3,-1,5,4,6,7,5,8,9];
arr=[...new Set(arr)].sort();
console.log(arr)
let newArr=arr.splice(-2);
let productValue=newArr[0]*newArr[1]
console.log(productValue);
