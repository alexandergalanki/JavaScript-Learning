
// function makeTea(param){
//     return("from makeTea function")

// }
// function processTeaOrder(makeTeafun){
//     const funn=makeTeafun("earl grey")
//     return funn;
// }

// const funCall=processTeaOrder(makeTea);
// console.log(funCall);

function createTeaMaker(){
    return function(teatype){
        return `Making ${teatype}`
    }
}
const teaMaker=createTeaMaker();
console.log(teaMaker("green tea"));
