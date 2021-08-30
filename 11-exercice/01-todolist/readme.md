o# Exercice: Liaison d'événement, classes & Style

_To Do List Enoncé  
Objectif travaillé: les directives, l’interpolation, le property binding, les événements_

**_Version simplifié_**

On veut que lorsque l’utilisateur valide son formulaire, un événement soit déclenché,
dans lequel on récupère ce que l’utilisateur a saisit

0. Faire une balise div avec l'id app par exemple.

1. Faire un formulaire avec dedans:

   - un **label** "tache"
   - un **input** de type text avec un attribut id et un attribut name.
   - un **input** de type submit.

2. Ajouter un événement de type submit sur la balise form
3. Dans **data**, créer un tableau vide (todos par exemple)
4. Dans **methods**, créer une methode (addTask par exemple) qui prendra en paramètre l'event
   - Supprimer le comportement par defaut du formulaire
   - Récuperer la valeur texte du champ 'tache' depuis le parametre et le stocker dans une variable
   - Ajouter la variable dans le tableau (todos par exemple)
5. Faire une **liaison d'événement** entre l'evenement de la balise _form_ et la method _addTask_
6. Faire une liste non ordonnée, avec une balise li vide dedans.
7. Dans la liste non ordonnée, On affiche le tableau à l’aide d’une **directive v-for** sur la balise li.
   > &lt;li v-for ...

**_ Version Complexifié _**
On veut lorsque l’utilisateur valide son formulaire, un événement se déclenche, dans lequel on récupère ce que l’utilisateur a saisit

1. L’utilisateur doit pouvoir saisir du texte depuis le champ input d’un formulaire

- une tache (text)
- une taille de police (text)
- une etiquette (select) - Urgent, Important, Pas important par exemple).

2. Dans **_data_** faire une liste d'objet
   > options: []

avec dedans:

- un nom (ex: Urgent)
- un type (classe bootstrap ex: alert-danger)
  > {name: '', type: ''}

3. Dans la balise &lt;select&gt;&lt;/select>  
   On va lier une balise &lt;option&gt; avec la directive v-for.  
   Ainsi nous allons creer une balise option pour chaque éléments dans notre tableau d'options.  
   On utilisera la liasion d'attibrut pour lier l'attribut _value_ avec le type et l'interpolation pour le _name_ de notre objet

> &lt;option value="exemple" &gt;</option>

5. Lorsqu’il valide le formulaire, on récupère ce qui a été saisit dans le formulaire à l’aide d’un événement puis on le stock dans un tableau de chaîne de caractères.  
   On doit aussi supprimer le comportement par défaut de l'événement

6. On affiche le tableau dans une liste à l’aide d’une directive for.

- Il faut ajouter lier style avec la taille de police choisit dans le formulaire
- Il faut ajouter une classe avec le select choisit dans le formulaire
