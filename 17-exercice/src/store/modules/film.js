import { URL_SEARCH } from '@/api/url';
import axios from 'axios';

const filmStore = ({
  namespaced: true,
  state: {
    films: [
        { titre: 'Arsène Lupin', description: 'Lorem', annee: 2004 },
        { titre: 'Le prestige', description: 'Lorem Ipsum', annee: 2006 },
        { titre: 'Insaisissable', description: 'Dolor ipsum', annee: 2013 },
        { titre: 'Jeux interdits', description: 'Leviosa Ipsun', annee: 1952 }
    ]
  },
  mutations: {
    setFilms(state, nouveaux_films) {
      state.films = nouveaux_films;
    }
  },
  actions: {
    fetchFilms(context, nomDuFilm) {
      return new Promise((resolve) => {
          axios.get(URL_SEARCH+nomDuFilm).then(
            (reponse) => {
              context.commit('setFilms', reponse.data.results)
              resolve();
            }
          ).catch(e => console.error(e));
      });
    }
  },
});

export default filmStore;
