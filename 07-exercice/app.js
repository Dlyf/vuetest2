import {Employe} from './js/classes/employe.js';

Vue.createApp({
    data: function() {
        const variables = {
            personnes: Employe.makeTenEmploye()
        }
        return variables;
    }
}).mount("#app");