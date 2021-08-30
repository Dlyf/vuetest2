<template>
    <div>
        <p>Retourner sur la page précédente</p>
        <button @click="backToPage">Retour</button>
        <button @click="backToHome">Retour Accueil</button>
    </div>
</template>

<script>
    export default {
        methods: {
            backToPage() {
                this.$router.go(-1);
            },
            backToHome() {
                this.$router.push('/');
            }
        },
    }
</script>

<style scoped>

</style>