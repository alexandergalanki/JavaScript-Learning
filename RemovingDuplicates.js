const ArrWithDuplicates=[1,2,1,2,,5,6,5];
const UniqueArr=[];
//Using forEach
ArrWithDuplicates.forEach((value) =>{
    if(!UniqueArr.includes(value)){
        UniqueArr.push(value);
    }
})
console.log(UniqueArr);