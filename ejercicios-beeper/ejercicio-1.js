var boton = document.querySelector("#boton1");

boton.addEventListener('click', function() {
    var body = document.querySelector("body");
    body += body.insertAdjacentHTML("beforeend", "<p>BEEP</p>");
})

