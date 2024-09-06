// 'use strict';

// let sDriversLicense=false;
// const passTest=true;

// if(passTest) sDriversLicense=true;
// if(sDriversLicense) console.log('I can drive');
//--------------------------------------------------------------------------------------
// function fruitProcessor(apples,mangoes){
//     console.log(apples,mangoes)
//     const juice=`juice ${apples} apples and ${mangoes} mangoes.`;
//     return juice
// }
// let juicee=fruitProcessor(5,10)
// console.log(juicee);
// console.log(juicee);
//console.log(fruitProcessor(5,10));
// console.log(fruitProcessor(5,10));


// const cal2=function(birthyear){
//     return 2037-birthyear
// }
// const k=cal2(1991)
// console.log(k)

// function fruitProcessor(fruit){
//     return fruit*4
// }

// function fruitJuice(apples,mangoes){
//     const noOfApples=fruitProcessor(apples)
//     const noOfMangoes=fruitProcessor(mangoes)

//     return `fruit juice is made up of ${noOfApples} apples and ${noOfMangoes} mangoes`
// }
// console.log(fruitJuice(7,5))

// const measureKelvin=function(){
//     const measurement={
//         temp:  "temp",
//         unit:'celcius',
//         value:prompt("degree celcius:")
//     }

//     const kelvin=Number(measurement.value)+273;
//     return kelvin;
//console.log(measureKelvin());
// }
//-------------------------------------------------
//console.log(`...${Temparatures[0]}C in 1 days...${Temparatures[1]}C in 2 days...${Temparatures[2]}C in 3 days...`);
const printforecast=function(Aa){
    let Temparatures=Aa
    let totalString="";
    for(let i=0;i<Temparatures.length;i++){
        let St=Temparatures[i];
        let x=i+1;
        let SString='...'+St+'C in '+ x +' days'
        totalString=totalString+SString;
    }
    //console.log(totalString);
    return totalString+'...';
}
let arr = [17,21,-5,5,10];
console.log(printforecast(arr));



