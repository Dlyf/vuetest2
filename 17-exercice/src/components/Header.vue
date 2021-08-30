<template>
    <div>
        <header>
        <h1>Super Site</h1>
        <!-- <the-navigation-header @envoyer-recherche="$emit('update-recherche', $event)"> -->
        <the-navigation-header></the-navigation-header>
    </header>
        <Navigation/>
    </div>
    
</template>

<script>
    import Navigation from '@/components/Navigation.vue';
    import TheNavigationHeader from './TheNavigation.vue';

export default {
    // methods: {
    //     update(event) {
    //         this.$emit('update-recherche', $event)
    //     }
    // },
    components: {
        'the-navigation-header': TheNavigationHeader,
        Navigation
    }
}

</script>


