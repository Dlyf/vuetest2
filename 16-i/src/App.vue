<template>
<!-- Charge ici les composants lors de la navigation -->
    <div>
        <v-nav></v-nav>
        <!-- Charge ici les composants lors de la navigation -->
        <router-view :key="$route.path"></router-view>
    </div>
</template>

<script>
import Title from './components/Title.vue';
import Navigation from './router/Navigation.vue';

const AppComponent = {
    components: {
        'v-title' : Title,
        'v-nav' : Navigation
    }
}
export default AppComponent;
</script>