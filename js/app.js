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

const cardsChosen = [];
const cardsChosenIds = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('you found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'img/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'img/white.png')

    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }

}


