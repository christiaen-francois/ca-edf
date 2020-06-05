var readline = require("readline-sync");
var chars = readline.question("Entez une série de chiffres : ").split(" ");

if(chars){
    console.log(chars);
}