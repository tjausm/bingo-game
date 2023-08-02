// Om website lokaal te testen open je Chrome via command prompt met volgende command: "C:\PathTo\Chrome.exe" --allow-file-access-from-files
$(document).ready(function () {
    initState(); //creates new state if none exists 
    addCustomElements();
    $(".refresh").click(function () {
        if(areSquaresPicked())
            new bootstrap.Modal(document.getElementById('refreshAlert')).show()      
        else
            refreshCard();
    });
    $(".confirmRefresh").click(function () {
        refreshCard();
    });
    $(".newCardRefresh").click(function () {
        var version = parseInt($("#cardVersion").val())
        setCardVersion(version);
        refreshCard();
    });

});