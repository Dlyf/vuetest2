const Navigation = {
    template: `
    <nav class="navbar navbar-light bg-light">
        <form class="form-inline" @submit.prevent="sendSearch">
            <input class="form-control mr-sm-2" name="search" type="search" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </nav>
    `,
    methods: {
        sendSearch(event) {
            console.log(event.target.search.value);
            event.preventDefault();
            this.$emit('envoyer-recherche', recherche);
        }
    }
}

export default Navigation;