<template>
    <div>
        <h1>ID de l'utilisateur {{ id }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style scoped>

</style>