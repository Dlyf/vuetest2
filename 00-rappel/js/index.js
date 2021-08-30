let prenom = "John";
let nom = 'Doe';
let nomComplet = `
    ${prenom} 
    ${nom.toLocaleUpperCase()}
`
console.log(nomComplet);

console.log("Décomposition d'un tableau")
const tableau = [1, 5, 10, 20];
// let a = tableau[0];
// let b = tableau[1];
// let c = tableau[2];

let [a, b, c] = tableau;

// Si les variables existent déjà
[a, b] = tableau
console.log("a = " + a);
console.log(`b = ${b}`);
console.log("Tableau: ", tableau);

// Spread Operateur
let [d, e, ...reste] = tableau

console.log("d = " + d);
console.log(`e = ${e}`);
console.log(`reste = ${reste}`);
console.log("Tableau: ", tableau);

// Très utilisé pour copier un tableau
let nouveau_tableau = [...tableau];
console.log(nouveau_tableau);

// Creer un tableau, avec un tableau a l'interieur
let tableau_tableau = [tableau];
console.log(tableau_tableau);

let fausse_copie = tableau;
fausse_copie.push("John");
console.log(tableau);

/* 
    Les objets stockent des variables(propriétés) 
    et des fonctions(méthodes)
*/
let voiture = {
    couleur: "bleue",
    vitesse: 30,
    freiner: function () {
        console.log("Je freine");
        
        // this.vitesse = this.vitesse - 10;
        // this.vitesse = 30 - 10;
        // this.vitesse = 20;
        this.vitesse -= 10;
    }
}

console.log(`Ma voiture est ${voiture.couleur}.`);
voiture.couleur = "rouge";
console.log(`Ma voiture est ${voiture.couleur}.`);

console.log(`Ma voiture roule à ${voiture.vitesse} km/h.`);
voiture.freiner();
console.log(`Ma voiture roule à ${voiture.vitesse} km/h.`);

// On copie la référence. Si on modifie le premier, on modifie le deuxième
let voiture2 = voiture;

console.log("Destructuration d'un objet.");
// On copie l'objet voiture
voiture2 = { ...voiture };

let prenoms = ["Rick", "John", "Maude"];
for (const prenom of prenoms) {
    console.log("Prenom: " + prenom);
}

console.log("_______ Fonctions anonymes ___________");

const f = function(prenom) {
    console.log(`Bonjour ${prenom} !`);
}

f('John');

// On utilise les fonctions anonymes plutot en tant que callback
// Une fonction qu'on va donner en parametre a une autre fonction, 
// Elle sera appellée plus tard

function queDoisJeFaireAvecCePrenom(myCallBack) {
    prenom = "Ella";
    myCallBack(prenom);
}

queDoisJeFaireAvecCePrenom(afficherPrenom);

// afficherPrenom("John") 
queDoisJeFaireAvecCePrenom(function (prenom) {
    console.log(`Bonjour ${prenom.toUpperCase()} !`);
});

console.log("Les méthodes de tableau: ");
prenoms = ["Rick", "John", "Maude"];


console.log(" => ForEach");

prenoms.forEach(afficherPrenom);
prenoms.forEach(function (p) {
    console.log(`Prenom: ${p}`);
})


prenoms = ["Rick", "John", "Maude"];
console.log(prenoms);
prenoms = new Array("Rick", "John", "Maude", 'Isabelle');
console.log(prenoms);

function afficherPrenom(prenom) {
    console.log(`Bonjour ${prenom} !`);
}

import MOVIES, { MyArray } from './MyArray.js';
// import MOVIES from './MyArray.js';

let noms = new MyArray("Rick", "John", "Maude", 'Isabelle');
noms.myForEach(afficherPrenom);

// noms.myForEach(let uneFonction = function (p) {})
noms.myForEach(function (p) {
    console.log(`Prenom: ${p.toUpperCase()}`);
})

console.log(" => Filter");
nouveau_tableau = prenoms.filter(
    function (element) {
        let isSuperieur = element.length > 4;
        return isSuperieur;
    }
);

console.log("Filter: ", nouveau_tableau);

nouveau_tableau = noms.myFilter(
    function (element) {
        let isSuperieur = element.length > 4;
        return isSuperieur;
    }
)

