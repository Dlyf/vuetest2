
const Body = {
    props: ['rechercher'],
    template: `
    <form v-on:submit="ajouterFilm">
    <label for="titre">Titre du film</label>
    <input type="text" id="titre" name="titre">
    <label for="description">Description du film</label>
    <input type="text" id="description" name="description"> 
    <label for="annee">Année de sortie</label>
    <input type="number" id="annee" name="annee">
    <input type="submit" value="valider">
</form>
<table v-if="films.length" class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">titre</th>
        <th scope="col">description</th>
        <th scope="col">année de sortie</th>
        <th scope="col">action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(film, index) of films">
        <td>{{ index +1 }}</td>
        <td>{{ film.titre }}</td>
        <td>{{ film.description }}</td>
        <td>{{ film.annee }}</td>
        <td><img @click="supprimerFilm" src="./ressources/delete.svg" width="32" alt=""></td>
      </tr>
    </tbody>
  </table>
    `,
    data: function() {
        return {
            films: [
                { titre: 'Arsène Lupin', description: 'Lorem', annee: 2004 },
                { titre: 'Le prestige', description: 'Lorem Ipsum', annee: 2006 },
                { titre: 'Insaisissable', description: 'Dolor ipsum', annee: 2013 },
                { titre: 'Jeux interdits', description: 'Leviosa Ipsun', annee: 1952 }
            ]
        }
    },
    methods: {
        ajouterFilm(event) {
            const titre = event.target.titre.value;
            const description = event.target.description.value;
            const annee = event.target.annee.value;
            // console.log(titre);
            const film = {
                titre,
                description,
                annee
            }
            this.films.push(film);
            event.preventDefault();
            

        },
        supprimerFilm(index) {
            this.films.splice(index, 1);
        }
    },
    computed: {
        filmFilter() {
            const nomDuFilm = this.rechercher.toLowerCase();
            const filtre = this.films.filter( (film) => {
                const ttitle = film.titre.toLowerCase();
                return film.titre.includes(nomDuFilm);
            });
            return filtre;
        }
    }
}

export default Body;