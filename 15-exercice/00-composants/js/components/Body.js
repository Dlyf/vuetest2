import Article from './article.js';
const Body = {
    template: `
        <main>
            <h2>{{titre}}</h2>
            <v-article @update-title="titre = $event">
            </v-article>
        </main>
    `,
    data: function() {
        return {
            titre: 'lorem ipsum'
        }
    },
    components: {
        'v-article': Article
    }
}

export default Body;