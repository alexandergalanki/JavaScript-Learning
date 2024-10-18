const str="apple bananna apple orange bananna apple";
const str2=str.split(" ");
let newArr=[];

const NumOfElements=(arr)=>{
    const newObj={};
    arr.forEach((value) => {
        if(!newObj[value]){
            newObj[value]=1;
        }else{
            newObj[value]++;
        }
    });
    return newObj;
}
console.log(NumOfElements(str2));








// for(let i=0;i<str2.length;i++){
//     if(!(newArr.includes(str2[i]))){
//         newArr.push(str2[i]);
//     }
// }
// console.log(newArr);
