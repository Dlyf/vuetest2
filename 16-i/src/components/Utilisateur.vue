<template>
    <div>
        <h1>Liste des utilisateurs</h1>
        <button @click="getUser">
        Recuperer les utilisateurs
        </button>

        <ul>
            <li v-for="utilisateur of Utilisateurs" :key="utilisateur.id">
                {{ utilisateur.name}}
            </li>
        </ul>

        <form @submit.prevent="addArticle">

            <label for="">Titre</label>
            <input type="text" name="titre" id="titre">

            <label for="msg">Message</label>
            <input type="text" name="msg" id="msg">


            <input type="submit" value="Valider">
        </form>
        <p v-if="newArticle">L'utilisateur n°{{newArticle.id}} a bien été créée</p>

        <input type="text" v-model="nomDuFilm" placeholder="ex:Avatar" />
        <button @click="getMovie">
            Récupérer les Films
        </button>

        <ul>
            <li v-for="film of films" :key="film.id">
                {{ film.title }} - {{ film.release_date}}
            </li>
        </ul>
    </div>
</template>
    

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                Utilisateurs: [],
                films: [],
                newArticle: null,
                nomDuFilm: ''
            }
        },
        methods: {
            getUser() {
                const URL = "https://jsonplaceholder.typicode.com/users";
                axios.get(URL).then(
                    (reponse) => { 
                        console.log(reponse);
                        this.Utilisateurs = reponse.data;    
                        }

                );
            },
            async addArticle(event) {
                const titre = event.target.titre.value;
                const msg = event.target.msg.value;
                const userId = 1;

                const article = {
                    userId,
                    title: titre,
                    body: msg
                }

                const reponse = await axios.post(
                    'http://jsonplaceholder.typicode.com/posts',
                    article
                );
                if (reponse.status == 201) {
                    this.newArticle = reponse.data;
                }
                console.log(reponse);

            },
            async getMovie() {
                const URL = "https://api.themoviedb.org/3/search/movie?api_key=123131ea405ceb7ba968916397a05764&language=fr-FR&append_to_response=credits&query=";
                const reponse = await axios.get(URL+this.nomDuFilm);
                console.log(reponse.data);
                this.films = reponse.data.results;
            }
            
            
        }
    }
</script>

<style scoped>

</style>