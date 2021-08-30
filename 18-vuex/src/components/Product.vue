<template>
    <div>
        <h1>Liste de produits</h1>
        <img v-if="isLoading" src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="" />
        <ul>
            <li v-for="produit of produitsDispo" :key="produit.id">
                {{ produit.title }}, il en reste seulement {{ produit.inventory }}
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                // produits: []
                isLoading: false
            }
        },
        computed: {
            produits() {
                return this.$store.state.produits
            },
            produitsDispo() {
                return this.$store.getters.produitsDisponibles
            }
        },
        created() {
            // Pour appeler une action on utilise
            this.isLoading = true 
            this.$store.dispatch('fetchProduits').then( () => {
                this.isLoading = false;
            });
        }
    }
</script>

<style scoped>

</style>