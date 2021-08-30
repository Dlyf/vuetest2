const Body = {
    template: `
            <button @click="updateTitle">Mettre à jour</button>
            `,
    methods: {
        updateTitle() {
            this.$emit('update-title', 'Toto');
        }
    }
}

export default Body;