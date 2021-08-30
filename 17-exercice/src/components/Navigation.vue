<template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link v-bind:to="{name: 'About'}">About</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>