const teas=["Green Tea","herbal tea","chai","latte"];
let prefTeas=[];
for(let tea of teas){
    if(tea==="herbal tea"){
        continue
    };
    prefTeas.push(tea);
}
console.log(prefTeas);
