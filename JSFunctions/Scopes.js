// note : node global scope is different and browser or console global scope is different
let a = 300
if(true){
    let a = 10
    const b = 20

    console.log("Inner Block Scope value of a:", a);
}


console.log(a);