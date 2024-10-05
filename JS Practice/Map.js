const arr=[1,2,3,9,4,5]
function isOdd(x){
    return x%2;
}


const output=arr.filter(isOdd);
console.log(output);
// console.log(output);

const output1=arr.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr;
    }
    return acc;
},0)

console.log(output1);

const users=[
    {firstName:"Bobby",lastName:"Galanki",age:"27"},
    {firstName:"Alex",lastName:"Galanki",age:"27"},
    {firstName:"AlexBobby",lastName:"Galanki",age:"27"}
]

const userOutput=users.map((obj)=>{
    const fname=obj.firstName;
    const lname=obj.lastName;
    return fname+" "+lname;
})
console.log(userOutput);

const output2=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(output2);