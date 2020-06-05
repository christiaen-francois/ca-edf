let arg = process.argv[2];
if(arg){
    // On initialise le réslutat à 1 car 0 * n  sera toujours O
    let result = 1;
    // Boucle qui va démarrer à 1 et aller jusqu'à l'argument défini
    for (var i = 1; i <= arg; i++) {
        // On effectue le calcul en place le résultat dans la variable
        // result pour l'utiliser au prochain calcul
        result = result * i;
    }
    console.log(result);
}