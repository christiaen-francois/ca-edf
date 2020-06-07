const fs = require('fs');
const r1 = fs.readFileSync('./c1.txt','utf8').split("\n");
const r2 = fs.readFileSync('./c2.txt','utf8').split("\n");
let result = [];
let lat;
let latTmp;
let lng;
let lngTmp;

function rectangle(){
    // La référence est le tableau carré 2
    for(r2i = 0; r2i < r2.length; r2i++){
        if(r1.length > 0){
            if(r2[r2i].includes(r1[0])){
                if(lngTmp === undefined){
                    lngTmp = r2i;
                }
                if(latTmp === undefined){
                    latTmp = r2[r2i].indexOf(r1[0]);
                }else{
                    if(latTmp != r2[r2i].indexOf(r1[0])){
                        return r2i+ " foirage!";
                    }
                }
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