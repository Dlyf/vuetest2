# Exercice 3: Liaison d'événement, classe & Style

_Essayez de faire l’exercice sans regarder le cours._

Pour cet exercice on souhaite :

Parmi un choix de 3 boutons, l'utilisateur peut cliquer sur le bouton chien, chat ou lapin. On affiche une image correspondant au bouton cliqué (chien pour chien etc.. )

On peut commencer par lier la source de l'image à une variable imageUrl par exemple.

- Si elle est vide on peut afficher le message : « Aucune image trouvée»

- Sinon on peut afficher l'image correspondant au bouton appuyé.

**_Consignes détaillées_**

1. Générer une nouvelle application nommée 10-exercices
2. Inclure vue.js
   <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
3. Créer une div avec un id 'app'
4. Créer une balise &lt;p&gt; &lt;/p&gt; vide
5. Créer une balise &lt;img /> vide
6. Créer 3 boutons:

   - 1 avec le texte 'chien'
   - 1 'chat'
   - 1 'Lapin'

7. Dans **_data_**, créer 1 variable (ex: imageUrl) vide par défaut.

8. Sur le paragraphe ajouter un rendu conditionnel:  
Si imgUrl est null, on affiche **Aucune image trouvée** dans le &lt;p&gt;&lt;/p>

9. Lier l'attribut src de l'image à la variable (ex: imageUrl)

10. Dans **_methods_**, créer une méthode changeImage() qui prendra en paramètre un nombre

11. Dans la methode changeImage(nombre), tester si

    - Si le nombre vaut 1 l'url de l'image sera un chien
    - Si le nombre vaut 2 l'url de l'image sera un chat
    - Si le nombre vaut 3 l'url de l'image sera un lapin
    - Si le nombre vaut autre chose l'url de l'image sera vide.

12. Ajouter une liaison d'événement de type clique sur chaque bouton.

13. La liaison d'événement appellera la méthode changeImage précédemment créée. Avec comme argument le numéro qui correspond (1 pour chien par exemple)
