import TheHeader from './components/Header.js';
import TheBody from './components/Body.js';

let app = Vue.createApp({
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
}).mount("#app");