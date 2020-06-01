var myStairs = process.argv[2];
function stairs(stairs = 0){
    if(stairs == 0){
        console.log("Pour atteindre le sommet il te faut viser haut!");
    }else{
        for(var i = 1; i <= stairs; i++){
            var spaceInt = stairs - i,
                stepsInt = i,
                step = "",
                j = 1,
                k = 1;

            // Spaces
            while(j <= spaceInt){
                step += " ";
                j++;
            };
            // Steps
            while(k <= stepsInt){
                step += "#";
                k++;
            }
            console.log(step);
        }
    }
}
stairs(myStairs);