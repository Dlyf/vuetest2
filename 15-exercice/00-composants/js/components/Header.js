import TheNavigationHeader from './TheNavigation.js'

const Header = {
    template: `
        <header>
            <h1>Super Site</h1>
            <img width="200" src="vuejs.png" alt=""/>
            <the-navigation-header></the-navigation-header>
        </header>
    `,
    components: {
        'the-navigation-header': TheNavigationHeader
    }
}

export default Header;