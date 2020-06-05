let arg = process.argv[2];
if(arg){
    // Tableau des mots à traiter
    let words = arg.split(' ');
    // Tableau vide pour recevoir ma phrase transformée
    let newWords = [];
    let index = 0;
    // Je parcours chaque mots de ma phrase
    words.forEach(word => {
        // Chaise de caractère vide pour accueillir  le nouveau mot
        let wordSplited = word.split('');
        newWord = "";
        wordSplited.forEach(letter => {
            if(index%2){
                newWord += letter.toUpperCase(); // to maj
            }else{
                newWord += letter.toLowerCase(); // to maj
            }
            index++;
        });
        // J'ajoute le mot terminé au tableau de la phrase
        newWords.push(newWord);
    });
    // Je sors la chaine de caractère finale
    console.log(newWords.join(' '));
}