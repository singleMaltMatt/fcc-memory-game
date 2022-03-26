const cardArray = [
    {
        name: 'cherry',
        img: 'img/cherry.png'
    },
    {
        name: 'chest',
        img: 'img/chest.png'
    },
    {
        name: 'chicken',
        img: 'img/chicken.png'
    },
    {
        name: 'heart',
        img: 'img/heart.png'
    },
    {
        name: 'skull',
        img: 'img/skull.png'
    },
    {
        name: 'star',
        img: 'img/star.png'
    },
    {
        name: 'cherry',
        img: 'img/cherry.png'
    },
    {
        name: 'chest',
        img: 'img/chest.png'
    },
    {
        name: 'chicken',
        img: 'img/chicken.png'
    },
    {
        name: 'heart',
        img: 'img/heart.png'
    },
    {
        name: 'skull',
        img: 'img/skull.png'
    },
    {
        name: 'star',
        img: 'img/star.png'
    },
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.png')
        console.log(card, i)
    }
}
createBoard()