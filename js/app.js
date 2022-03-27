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

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

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
    const resultDisplay = document.querySelector('#result')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same card!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'img/white.png')
        cards[optionTwoId].setAttribute('src', 'img/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)

    } else {
        cards[optionOneId].setAttribute('src', 'img/blank.png')
        cards[optionTwoId].setAttribute('src', 'img/blank.png')
        alert('Sorry, try again!')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations, you found them all!'
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


