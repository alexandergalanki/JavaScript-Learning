let arr=[10,3,5,6,2];
function ProdArr(arr){
    let prodArr=[];
    let finalArray=[];
    for(let i=0;i<arr.length;i++){
        arr.forEach(element => {
            if(element===arr[i]){
                return
            }
            prodArr.push(element);
        });
        let productVal=function(Arr){
            let val=1
            for(let i=0;i<Arr.length;i++){
                val=val*Arr[i];
            }
            return val;
        } 
        finalArray.push(productVal(prodArr));
        prodArr=[];
    }
    console.log(finalArray);  
}
let result=ProdArr(arr);
