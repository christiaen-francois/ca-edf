let arg = process.argv[2];

// On passe le nombre envoyé en agument de la fonction
function factoriel(nbr){
    // On multiple le nombre par lui même -1 jusuq'à arriver à 0.
    if (nbr === 0){
        return 1;
    }else{
        return nbr * factoriel(nbr - 1);
    }
}
console.log(factoriel(arg));