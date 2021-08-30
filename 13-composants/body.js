const bodyComponent = {
    template: `
        <div>
            <h2>Body Component: {{ titre }}</h2>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam at corrupti nulla unde veniam, fugit veritatis magni dolores nihil omnis itaque et consectetur architecto nemo dignissimos fugiat incidunt numquam soluta.</p>
            <p>{{ message }}</p>
        </div>
    `,
    props: ['titre'],
    data: function() {
        return {
            message: 'lorem'
        }
    }
}

export default bodyComponent;