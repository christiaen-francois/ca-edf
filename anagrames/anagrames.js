// Réprise des éléments de la source dans un tableau (inpiration Yann)
const fs = require('fs');
const search = process.argv[2];
const source = fs.readFileSync("./" + process.argv[3],"utf8").split("\n");
// Tableau vide pour récupérer les résulats éventuels
let anagrams = [];
// Fonction qui arrange la chaine de caractère en triant les lettre
// dans l'ordre alphabétique pour comparer plus facilement.
function cleanWord(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}  
// On parcours le tableau source en passant les chaines de caractère
// au nettoyage à sec. On met l'anagram dans le tableau pour résultat positif
function checkAnagrams(search){
    source.forEach(word => {
        if(cleanWord(search) === cleanWord(word)){
            anagrams.push(word);
        }
    });
    return anagrams;
}
console.log(checkAnagrams(search));