const CompteurComponent = {
    template: `
        <h2>Compteur Enfant {{ compteur }}</h2>
        <button @click="incrementerCompteur">Incrementer</button>
    `,
    props: ['parentcompteur'],
    data: function() {
        return {
            compteur: this.parentcompteur
        }
    },
    methods: {
        incrementerCompteur() {
            // this.compteur = this.compteur + 1
            this.compteur++;
            // $emit() : emet un evenement vers composant parent
            // elle prend 2 parametres: le nom de l'evenement
            this.$emit('my-incrementer', this.compteur);
        }
    }
}

export default CompteurComponent