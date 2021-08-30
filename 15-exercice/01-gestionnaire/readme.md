# Part1: Assembler les composants

1. Reprendre le composant header de l'exercice précedent
2. Reprendre le composant navigation de l'exercice précedent
3. Reprendre le composant body de l'exercice précedent

4.Ajouter le composant **_header_** et le composant **_body_**
5.Dans le template du composant **_navigation_** mettre un champ de recherche
ex1: <form> <input type="search"/> <input type="submit"/> </form>
ex2: formulaire bootstrap https://getbootstrap.com/docs/4.5/components/navbar/#forms

6. Dans le composant **_body_** mettre comme template: le tableau + formulaire de l'exercice 11 sur les films (copier/coller)
7. Dans le composant **_body_** mettre comme data: le tableau js de film de l'exercice 11 films (copier/coller)
8. Dans le composant **_body_** mettre comme methods: ajouterFilm et supprimerFilm de l'exercice 11 films (copier/coller)
9. Tester et verifier que vous pouvez bien inserer et supprimer un film (pensez a copier/coller le dossier ressource aussi)

# Part2: Rechercher d'un film

Pour rechercher un film nous allons devoir faire remonter la valeur du champ de recherche lorsque l'utilisateur clique sur le bouton recherche (onsubmit).

/!\ on doit faire remonter la recherche dans le composant parent (**_header_**) puis dans le parent (**\_App.vue**\_)

1. Dans le composant **_navigation_**, Ajouter l'événement submit sur le formulaire

2. Dans le composant **_navigation_**, cet événement appelle une fonction (ex: filtrerFilms)

3. Dans le composant **_navigation_**, dans les **_methods_**, créer la fonction filtrerFilm

4. La fonction émet un événement personnalisé vers son composant parent (cf img cours) avec la valeur du champ de recherche

> ex: this.\$emit('chercher-film', valeur)

5. Dans le composant **_Header_**, lier l'événement personnalisé a votre fonction

> ex: filtrerFilm

6. Dans le composant **_Header_**, dans les **_methods_**, créer cette fonction filtrerFilm

7. Cette fonction émet un événement personnalisé vers son parent (cf image cours), avec la valeur de l'événement (ex: 'chercher-film', event)
8. Dans le composant principal (**_App.vue_**), dans **_data_**, créer une variable.

> ex: rechercher: ''

9. Dans le composant principal (**_App.vue_**), lier l'événement personnalisé à votre fonction

> ex: filtrerFilm()

9.Dans le composant principal (**_App.vue_**), dans les **_methods_**, créer cette fonction filtrerFilm qui va mettre à jour votre variable de l'étape 8, dans data

10. Dans le composant principale (**_App_**), lier la variable 'rechercher' à un attribut de notre composant body

> ex: &lt;mon-body v-bind:x="x"&gt;&lt;/mon-body&gt;

11. Dans le composant **_body_**, ajouter props: []

12. Dans le composant **_body_**, dans props, récupérer l'attribut personnalisé

13. Dans le composant **_body_**, dans le template modifier dans le tableau la boucle for, pour afficher les films du tableau 'fimlsFiltre'

14 Pour le moment le tableau est vide donc on a rien, c'est normal

15. Dans le composant **_body_**, dans **__computed__** ajouter une variable

    > ex: filmsFiltre: []

16. Dans le composant **_body_**, dans **__computed__**, le tableau filtre prendra comme valeur le tableau de films filtrer en fonction de la recherche de l'utilisateur.

A Chaque fois que la valeur de l'attribut personnalisé du parent changera, la propriété calculée sera exectutée.  
c'est ici qu'on va filtrer le tableau de film avec la methode filter, la fonction 'filter' renvoie un nouveau tableau
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
