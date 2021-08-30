Vue.createApp({
    data() {
        return {
            films: [
                // { titre: '', description: '', annee: 0 },
                // { titre: '', description: '', annee: 0 },
                // { titre: '', description: '', annee: 0 },
                // { titre: '', description: '', annee: 0 }
            ],
        }
    },
    methods: {
        addFilm(event) {
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

    }
}).mount("#app");