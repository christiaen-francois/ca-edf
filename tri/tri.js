const args = process.argv;
// Prendre tous mes éléments à partie de 3; Supprimer les 2 premiers.
args.splice(0,2);

function bubbleSort(items) {
    var length = items.length;
    // Nombre total de passage dans la boucle "length"
    for (var i = 0; i < length; i++) { 
        for (var j = 0; j < (length - i - 1); j++) {
            // Comparer si le nombre adjacent est plus grand
            if(Number(items[j]) < Number(items[j+1])) {
                /**
                 * Repositionner les nombres
                 * Placer l'élément plus petit après
                 * tmp = Variable temporaire pour stocker le nombre plus petit de la comparaison
                 */
                var tmp = items[j];
                items[j] = items[j+1]; // Remplacement de l'élément par l'élément adjacent
                items[j+1] = tmp; // Remplacement de l'élément adjacent par l'élément temporaire
            }
        }        
    }
    return items;
}

console.log("Brut = " + args);
console.log("Traité = "+ bubbleSort(args));