const zod=require("zod");
//function to validate if array with numbers or strings
function validate(arr){
    const schema=zod.array(zod.string());
    const response=schema.safeParse(arr);
    console.log(response);
}
validate(["JavaScript","is","fun"]);