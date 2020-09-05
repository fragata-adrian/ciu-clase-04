
var boton = document.querySelector("#boton1");

boton.addEventListener('click', seEjecutaEnEvento());

/*
boton.addEventListener('click', function() {
    var body = document.querySelector("body");
    body += body.insertAdjacentHTML("beforeend", "<p>BEEP</p>");
    document.querySelector("body").classList.toggle("color");
})
*/

var seEjecutaEnEvento = function() {
    var body = document.querySelector("body");
    body += body.insertAdjacentHTML("beforeend", "<p>BEEP</p>");
    document.querySelector("body").classList.toggle("color");
}
