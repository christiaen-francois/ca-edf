var arg = process.argv[2];
if(arg){
    // Tableau des mots à traiter
    var words = arg.split(' ');
    // Tableau vide pour recevoir ma phrase transformée
    var newWords = [];
    // Je parcours chaque mots de ma phrase
    words.forEach(word => {
        // Chaise de caractère vide pour accueillir  le nouveau mot
        newWord = "";
        // Je parcours les lettres du mot
        for (var i = 0; i < word.length; i++) {
            // Si c'est pair = j'ajoute la lettre en majuscule à newWord 
            // Sinon j'ajoute la lettre à newWord sans traitement particulier
            if(i%2){
                newWord += word.charAt(i).toUpperCase(); // to maj
            }else{
                newWord += word.charAt(i); // to maj
            }
        }
        // J'ajoute le mot terminé au tableau de la phrase
        newWords.push(newWord);
    });
    // Je sors la chaine de caractère finale
    console.log(newWords.join(' '));
}