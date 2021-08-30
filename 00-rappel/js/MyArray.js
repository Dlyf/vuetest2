//Une classe est un modèle ("Moule") qui permet de créer nos propres objets
export class MyArray {
    // Le nom de la fonction est imposée, elle permet l'initialisation de nos objets.
    // Regroupe tous les arguments(parametre) sous forme de tableau, on peut 
    // en donner autant qu'on veut
    constructor(...prenoms) {
        this.monTableau = prenoms;
        console.log(this.monTableau);
    }

    // myForEach(afficherPrenom) {
    myForEach(uneFonction) {
        for (const element of this.monTableau) {
            uneFonction(element);
            // afficherPrenom(element)
            // afficherPrenom("Rick")
        }
    }

    myFilter(myCallBack) {
        let new_tableau = [];
        for (const element of this.monTableau) {
            let isOk = myCallBack(element);
            if (isOk) {
                new_tableau.push(element);
            }
        }
        return new_tableau;
    }
}

// 1 seul export default par fichier;

const MOVIES = ["Avatar", "Titanic"];
export default MOVIES;