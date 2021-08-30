<template>
  <div>
    <the-header @update-recherche="updateRecherche"></the-header>
    <the-body :rechercher="recherche"></the-body>
    <router-view/>
    </div>
</template>

<script>
  import TheHeader from '@/components/Header.vue';
  import TheBody from '@/components/Body.vue';


export default ({
    components: {
        'the-header': TheHeader,
        'the-body': TheBody
    },
    data() {
        return {
            recherche: ''
        }
    },
    methods:{
        updateRecherche(event) {
            console.log("Recherche: " + event);
            this.recherche = event;
        }
    }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
