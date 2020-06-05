let arg = process.argv[2];

// On passe le nombre envoyé en agument de la fonction
function factoriel(nbr){
    console.log(nbr);
    // Si le nombre n'est pas égal à 0,
    // on le multiple par son facotoriel - 1
    if (nbr === 0){
        return 1;
    }else{
        return nbr * factoriel(nbr - 1);
    }
}
console.log(factoriel(arg));