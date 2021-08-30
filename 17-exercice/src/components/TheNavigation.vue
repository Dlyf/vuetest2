<template>
    <nav class="navbar navbar-dark bg-dark">
            <form class="form-inline" @submit.prevent="sendSearch">
                <input class="form-control mr-sm-2" name="search" type="search" placeholder="ex: Avatar">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Rechercher
                </button>
            </form>
        </nav>
</template>

<script>
    const Navigation = {

    methods: {
        sendSearch(event) {
            const recherche = event.target.search.value;
            // console.log(recherche);
            // this.$emit('envoyer-recherche', recherche);
            this.$store.commit('navModule/setNomDuFilm', recherche);
        }
    }
}

export default Navigation;
</script>