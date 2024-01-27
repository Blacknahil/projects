const cards = document.querySelectorAll('.how-it-works .card');
let currentCard = 0;

function showCards() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
        cards[i].classList.remove("show");
    }

    cards[currentCard].style.display = 'block';
    cards[currentCard].classList.add("show");
    cards[currentCard + 1].style.display = 'block';
    cards[currentCard+1].classList.add("show");

    currentCard++;

    if (currentCard >= cards.length - 1) {
        currentCard = 0;
    }
}

showCards();
setInterval(showCards, 2000);

const whatWeDoCards = document.querySelectorAll('.what-we-do .card');
let currentWhatWeDoCard = 0;
function showWhatWeDoCards() {
    for (let i = 0; i < whatWeDoCards.length; i++) {
        whatWeDoCards[i].classList.remove("show");
        whatWeDoCards[i].style.display = 'none';
    }

    whatWeDoCards[currentWhatWeDoCard].classList.add("show");
    whatWeDoCards[currentWhatWeDoCard].style.display = 'block';

    currentWhatWeDoCard++;

    if (currentWhatWeDoCard >= whatWeDoCards.length) {
        currentWhatWeDoCard = 0;
    }
}

showWhatWeDoCards();
setInterval(showWhatWeDoCards, 3000);