import { createStore } from 'vuex';
import shop from '@/api/shop.js';

export default createStore({
  // L'etat de l'application
  // Dans le store, le state c'est l'équivalent de data pour les composants
  // c'est ici qu'on mettra les variables du store.
  state: {
    produits: []
  },

  getters: {
    produitsDisponibles(state) {
      return state.produits.filter(p => p.inventory > 0);
    }
  },

  // Ce sont des fonctions qui mettent à jour l'état de l'application
  mutations: {
    // le parametre state est fourni automatiquement Vuejs
    setProduits(state, nouveaux_produits) {
      state.produits = nouveaux_produits;
    }
  },

  // Les actions sont équivalent aux méthodes pour les composants
  // Les actions appellent les mutations.
  actions: {
    /* Le contexte est founi automatiquement par Vuejs. Il permet l'acces aux mutations,
        state etc...
    */
    fetchProduits(context) {
      return new Promise((resolve) => {
        shop.getProducts(
          /*  pour appeler une mutation, on utilise la méthode commit
              La méthode commit prend 2 parametres:
                  - Le nom de la mutation sous de chaine de caractères
                  - La liste des nouveaux produits
          */
          (products) =>  { 
            console.log("Context: ", context);
            context.commit('setProduits', products);
            resolve();
          }
        );
      });
    }
  },
  // On va regrouper tous les morceaux stores pour en former un seul
  // userStore, productStore, etc....
  modules: {
  }
})
