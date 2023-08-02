function addCustomElements() {
    buildCard();
    addQuotes();
    addCardVersion();
    populateCardVersionSelector();
}

//Refreshes card but keeps cardversion
function refreshCard(){
    newCardContent();
    location.reload();
}

function buildCard() {

    var square1Unpicked = '<div class="square"><div class="squareContent" id="';
    var square1Picked = '<div class="square"><div class="squareContent pickedBG" id="';
    var square2 = '"> </div></div>';
    var freeSquare = '<div class="square"><div class="squareContent" id="freeSquare"> </div></div>';

    var pickedSquares = getState()[0];
    for (var i = 0; i < 24; i++) {
        var freeSquarePos = 12;
        if (i == freeSquarePos) {
            $("#card").append(freeSquare);
        }
        if (pickedSquares[i] == false) {
            $("#card").append(square1Unpicked + i + square2);
        } else {
            $("#card").append(square1Picked + i + square2);
        }
    }
};

function addCardVersion() {
    $('#cardName').prepend(cards[getState()[2]].name);
}

//function injects page.html, then builds the bingo card using the callBack function and lastly it refreshes the body so that jquery mobile layout is applied
function loadPage(name, callBack) {

    function refresh() {
        $('body').trigger('create');
    };

    function callBackNRefresh() {
        callBack();
        refresh();
    }

    var view = "#page";
    $(view).empty();
    var pageAdr = 'pages/'
    if (callBack == undefined) {
        $(view).load(pageAdr.concat(name), refresh);
    } else {
        $(view).load(pageAdr.concat(name), callBackNRefresh);
    }

}

function reloadCardContent() {
    clearCardContent();
    loadCard();
}

function populateCardVersionSelector() {
    var options = "";
    for (i = 0; i < cards.length; i++) {
        options = options + '<option value="' + i + '">' + cards[i].name + "</option>";
    }
    $("#cardVersion").append(options);
}