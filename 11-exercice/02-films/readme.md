# Gestionnaire de Films - Enoncé

**Objectifs travaillés**: les directives, l’interpolation, le property binding, les événements

_Vue d'ensemble_:

On veut déclencher un événement lorsque l’utilisateur valide son formulaire.
Depuis cette événement, on récupère ce que l’utilisateur à saisit et on l'ajoute au tableau de film

1. Faire un formulaire avec dedans:

   - un **_input_** de type text pour le titre du film
   - un **_input_** de type text pour la description du film
   - un **_input_** de type number pour l'année de sortie
   - un **_input_** de type submit

2. Faire un **_tableau HTML_** avec le nom des colonnes. (titre, description, annee de sortie, action)

3. Ajouter un **_événement_** de type submit sur la balise form

4. Créer une methode **_addFilm_** avec en parametre l'event

   - Supprimer le comportement par defaut du formulaire
   - Récuperer la valeur texte des champs input via l'événement
   - Ajouter la valeur des champs dans un objet film.
   - Ajouter cet objet à la liste de films qui se trouve dans data

5. On créer les rangées (tr) avec la directive v-for

6. Creer une methode **_removeFilm(index)_** qui permettra de supprimer un film

7. Sur l'image 'poubelle' dans le tableau HTML, **_ajouter un evenement_** de type click

8. Lier cette événement avec la methode removeFilm
