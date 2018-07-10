/**
 * Created by Björn on 21.10.2016.
 */
// Wenn man auf die Box mit der ID index klickt, wird man auf die Seite 'index.html' weitergeleitet
$('#index').click(function () {
    window.location = 'index.html';
});

// Wenn man auf die Box mit der ID lebenslauf klickt, wird man auf die Seite 'lebenslauf.html' weitergeleitet
$('#lebenslauf').click(function () {
    window.location = 'lebenslauf.html';
});

// Wenn man auf die Box mit der ID index klickt, wird man auf die Seite 'firma.html' weitergeleitet
$('#firma').click(function () {
    window.location = 'firma.html';
});

// Wenn man auf die Box mit der ID index klickt, wird man auf die Seite 'hobbies.html' weitergeleitet
$('#hobbies').click(function () {
    window.location = 'hobbies.html';
});

// Funktion aus dem Internet kopiert.
// http://stackoverflow.com/questions/15131857/jquery-clickable-div-not-working-on-inner-div
$("li").click(function(){
    window.location=$(this).find("a").attr("href");
    return false;
});