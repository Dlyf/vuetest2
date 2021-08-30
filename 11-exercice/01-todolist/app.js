Vue.createApp({
    data() {
        return {
            todos: [
            ],
            options: [ 
                { label: 'Urgent', valeur: 'alert alert-danger' },
                { label: 'Important', valeur: 'alert alert-warning' },
                { label: 'Pas Important', valeur: 'alert alert-info' }
            ]
        }
    },
    methods: {
        addTask(event) {
            const texte = event.target.task.value;
            const taille = event.target.size.value;
            const lvl = event.target.lvl.value;

            const task = {
                texte: texte,
                taille,
                lvl
            }
            console.log(task);

            this.todos.push(task);

            console.log(texte, taille, lvl); 
            this.options.push(size);
            this.options.push(lvl);
            //TODO : Recuperer la ta;ille
            //TODO : Recuperer le lvl
            //TODO : Créer un objet avec les 3 propriétés et l'ajouter dans le tableau
            
            this.todos.push(texte);
            event.preventDefault();


        }
    }
}).mount("#app");