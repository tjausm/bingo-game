//takes an array with 24 random numbers and fills the html bingo card with the corresponding quotes from the current kaartversie
function addQuotes() {
    var quotePos = kaartVersiePicker();
    var currCard = getCurrCard()
    var quotes = currCard.quotes;
    $("#freeSquare").text(currCard.freeSquare)
    for (var i = 0; i < 24; i++) {
        var currSquare = i;
        var quoteNr = quotePos[i]
        $("#" + currSquare).text(quotes[quoteNr]);
        $("body").on("click", "#".concat(currSquare), toggleColor);
    }
    checkWin();
}

//generates 24 random numbers (without duplicates) from 1..n (n = amount of quotes in kaartversie) to get 24 random quotes from a kaartversie
function randomQuotes() {
    var quotes = getCurrCardQuotes()
    var usedNums = new Array(quotes.length);
    var quotePos = new Array(24);
    for (var i = 0; i < 24; i++) {
        var newNum;
        do {
            newNum = getNewNum();
        }
        while (usedNums[newNum])
        usedNums[newNum] = true;
        quotePos[i] = newNum;
    }
    return quotePos;
}

function getCurrCard(){
    return cards[getCardVersion()];
}

function getCurrCardQuotes(){
    return cards[getCardVersion()].quotes;
}


function kaartVersiePicker() {
    if (stateExists()) {
        var usedQuotes = getState()[1];
        return usedQuotes;
    } else {
        return randomQuotes(defaultCard);
    }
}

function getNewNum() {
    return Math.floor(Math.random() * getCurrCardQuotes().length);
}

function toggleColor(evt) {
    if (evt) {
        var thisSquare = evt.target;
    } else {
        var thisSquare = window.event.srcElement;
    }
    if (thisSquare.className == "squareContent") {
        thisSquare.className += " pickedBG";
        savePickedSquares(thisSquare, true)
    } else if (thisSquare.className == "squareContent winningBG") {
        thisSquare.className = "squareContent";
        savePickedSquares(thisSquare, false);
        var winningCells = document.getElementsByClassName("squareContent winningBG");
        var length = winningCells.length;
        for (var i = 0; i < length; i++) {
            winningCells[0].className = "squareContent pickedBG";
        }

    } else {
        thisSquare.className = "squareContent";
        savePickedSquares(thisSquare, false)
    }
    checkWin();
    checkAllCorrect();
}

function checkWin() {
    var winningOption = -1;
    var setSquares = 0;
    var winners = new Array(31, 992, 15360, 507904, 541729, 557328, 1083458, 2162820, 4329736, 8519745, 8659472, 16252928);

    for (var i = 0; i < 24; i++) {
        var currSquare = i;
        if (document.getElementById(currSquare).className != "squareContent") {
            setSquares = setSquares | Math.pow(2, i);
        }
    }

    for (var i = 0; i < winners.length; i++) {
        if ((winners[i] & setSquares) == winners[i]) {
            winningOption = i;
        }
    }

    if (winningOption > -1) {
        for (var i = 0; i < 24; i++) {
            if (winners[winningOption] & Math.pow(2, i)) {
                currSquare = i;
                document.getElementById(currSquare).className = "squareContent winningBG";
            }
        }
        confetti.start(5000); 
    }
};

//Easter egg: shows a custom modal if player ticks off all squares
function checkAllCorrect(){
    if(getState()[0].indexOf(false) == -1)
        new bootstrap.Modal(document.getElementById('allCorrectAlert')).show()     
}