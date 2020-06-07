const fs = require('fs');
const r1 = fs.readFileSync("./" + process.argv[2],"utf8").split("\n");
const r2 = fs.readFileSync("./" + process.argv[3],"utf8").split("\n");
let result = [];
let lat;
let latTmp;
let lng;
let lngTmp;

function rectangle(){
    // On boucle à partir du caré 2 voir pour voir si 
    // Les éléments du premier y sont.
    for(r2i = 0; r2i < r2.length; r2i++){
        // Je check si mon carré 1 n'est pas vide (voir ci-dessous)
        if(r1.length > 0){
            // Si le premier élément du tableau carré 1 est présent dans la boucle
            if(r2[r2i].includes(r1[0])){
                // On mémorise la position horizontale du permier élément
                if(lngTmp === undefined){
                    lngTmp = r2i;
                }
                // On mémorise la position verticale du premier élément
                if(latTmp === undefined){
                    latTmp = r2[r2i].indexOf(r1[0]);
                }else{
                    // Si la position horizontale n'est pas identique à l'itération précédente,
                    // On dégage
                    if(latTmp != r2[r2i].indexOf(r1[0])){
                        return "Désolé le carré a foiré à la position "+ r2i;
                    }
                }
                // On enlève l'élément du tableau carré 1 pour la prochaine boucle
                r1.splice(0,1);
            }
        }else{
            lat = latTmp;
            lng = lngTmp;
        }
    }
    return result = [lat, lng];
}
console.log(rectangle());