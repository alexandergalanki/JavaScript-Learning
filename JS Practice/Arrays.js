const teaFlavors=["green Tea","black Tea","Oolong Tea"]
const teaFla=new Array("green Tea","black Tea","Oolong Tea")
console.log(teaFla);

teaFlavors[2]="jasmine tea";
console.log(teaFlavors);

teaFlavors.push("chai")
console.log(teaFlavors);
teaFlavors.unshift("bhAAi Chai");
console.log(teaFlavors);
let k=teaFlavors.pop();
console.log(k);

let popularTeas=["Chaia","oolang","blue tea"];
let softCopyTeas=popularTeas;
console.log(softCopyTeas);
softCopyTeas.pop();
console.log(popularTeas);

let hardCopy=[...popularTeas];
console.log(hardCopy);
let hardCopy1=popularTeas.slice();
console.log(hardCopy1);

let newArr=[...teaFlavors,...hardCopy];
let newArr1=teaFlavors.concat(popularTeas);
console.log(newArr);
console.log(newArr1);

let teaLength=newArr.length;
console.log(teaLength);

let isTeaExists=newArr.includes("Chaia");
console.log(isTeaExists);







