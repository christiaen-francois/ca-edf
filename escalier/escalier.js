// node escalier.js 26
var myStairs = process.argv[2];
function stairs(stairs = 0){
    if(stairs > 0){
        for(var i = 1; i <= stairs; i++){
            var spaceInt = stairs - i,
                stepsInt = i,
                step = "",
                spaceIndex = 1,
                stepIndex = 1;

            // Spaces
            while(spaceIndex <= spaceInt){
                step += " ";
                spaceIndex++;
            };
            // Steps
            while(stepIndex <= stepsInt){
                step += "#";
                stepIndex++;
            }
            console.log(step);
        }
    }else{
        console.log("Pour atteindre le sommet il te faut viser haut! : " + myStairs);
    }
}
stairs(myStairs);