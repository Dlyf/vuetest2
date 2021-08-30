import { createStore } from 'vuex';
import navModule from './modules/nav';
import filmModule from './modules/film';

export default createStore({

  namespaced: true,
  modules: {
    navModule,
    filmModule
  }
})
