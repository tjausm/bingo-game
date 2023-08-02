var persistentStore;
var defaultCard = cards.length - 1;
var state;

function initState() {
    persistentStore = new Persist.Store('state');
    if (!stateExists()) {
        newState();
    }
}

function newState() {
    setCardVersion(defaultCard);
    newCardContent();
}

function newCardContent() {
    setCardContent(initPickedSquares(), randomQuotes());
}

function initPickedSquares() {
    var pickedSquares = new Array(24);
    for (var i = 0; i < 24; i++) {
        pickedSquares[i] = false;
    }
    return pickedSquares;
}

function savePickedSquares(square, picked) {
    var pickedSquares = getState()[0];
    var id = parseInt(square.id);
    pickedSquares[id] = picked;
    setState(pickedSquares, getState()[1], getState()[2]);
}

function saveUsedQuotes(quote) {
    var usedQuotes = getState()[1];
    usedQuotes.push(quote);
    setState(getState()[0], usedQuotes, getState()[2]);
}


function stateExists() {
    if (persistentStore.get("pickedSquares") && persistentStore.get("usedQuotes") && persistentStore.get("cardVersion")) {
        if (cards.length >= getState()[2]) {
            return true;
        }
    }
    return false;
}

function areSquaresPicked() {
    if (getState()[0].indexOf(true) != -1)
        return true
    return false
}

function getCardContent() {
    var currentState = new Array(2);
    currentState[0] = JSON.parse(persistentStore.get("pickedSquares"));
    currentState[1] = JSON.parse(persistentStore.get("usedQuotes"));
}

function setCardContent(pickedSquares, usedQuotes) {
    persistentStore.set("pickedSquares", JSON.stringify(pickedSquares));
    persistentStore.set("usedQuotes", JSON.stringify(usedQuotes));
}

function getCardVersion() {
    return parseInt(persistentStore.get("cardVersion"));
}

function setCardVersion(cardVersion) {
    persistentStore.set("cardVersion", JSON.stringify(cardVersion))
}

function getState() {
    var currentState = new Array(3);
    currentState[0] = JSON.parse(persistentStore.get("pickedSquares"));
    currentState[1] = JSON.parse(persistentStore.get("usedQuotes"));
    currentState[2] = parseInt(persistentStore.get("cardVersion"));
    return currentState;
}

function setState(pickedSquares, usedQuotes, cardVersion) {
    persistentStore.set("pickedSquares", JSON.stringify(pickedSquares));
    persistentStore.set("usedQuotes", JSON.stringify(usedQuotes));
    persistentStore.set("cardVersion", JSON.stringify(cardVersion))
}

function clearCardContent() {

    persistentStore.remove('pickedSquares');
    persistentStore.remove('usedQuotes');
}

function clearState() {

    persistentStore.remove('pickedSquares');
    persistentStore.remove('usedQuotes');
    persistentStore.remove('cardVersion')
}