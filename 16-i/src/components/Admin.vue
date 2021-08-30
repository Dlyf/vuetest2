<template>
    <div>
        <h1>Page d'administration</h1>
        <p>Vous devez être connecté pour voir cette page</p>
        <button @click="logout">Déconnexion</button>
    </div>
</template>

<script>
    export default {
        methods: {
            logout() {
                localStorage.removeItem('email');
                this.$router.push('/login');
            }
        },
    }
</script>

<style scoped>

</style>