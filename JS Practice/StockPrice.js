const priceArr=[5,7,1,4,2,3,9,3];
function stockPrice(arr){
    let lowestValue=0.01;
    let HighestValue=0;
    let lowValPosition;
    let HighestValuePosition=0;
    let connn=0;
    for(let i=0;i<arr.length;i++){
        if(lowestValue>=arr[i]){
            lowestValue=arr[i];
            lowValPosition=arr.indexOf(arr[i])+1; 
        }
    }
    let newArr=arr.slice(arr.indexOf(lowestValue),arr.length);
    for(let j=0;j<newArr.length;j++){
        if(HighestValue<newArr[j]){
            HighestValue=newArr[j];
        }
    }
    for(let i=lowValPosition;i<arr.length;i++){
        connn=connn+1;
        //HighestValuePosition=lowValPosition+1;
        if(arr[i]===HighestValue){
            HighestValuePosition=lowValPosition+connn;
            break;
        }   
    }
    let Profit=HighestValue-lowestValue;
    console.log(`Buy Stock on ${lowValPosition}rd day for ${lowestValue}Rs, 
        sell on ${HighestValuePosition}th day for ${HighestValue}Rs`);
    console.log(`Profit is ${Profit}`);
}
stockPrice(priceArr);