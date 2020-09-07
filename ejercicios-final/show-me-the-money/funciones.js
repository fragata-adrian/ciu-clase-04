var botonDinero = document.querySelector('#boton-dinero');
var imgDinero = document.querySelector('#img-dinero');

var botonMiami = document.querySelector('#boton-miami');
var imgMiami = document.querySelector('#img-miami');

var botonRicky = document.querySelector('#boton-ricky');
var imgRicky = document.querySelector('#img-ricky');

var imagenes = document.querySelectorAll('img');

botonDinero.addEventListener("click", function() {
    imgDinero.classList.toggle("oculto");
})

botonMiami.addEventListener("click", function() {
    imgMiami.classList.toggle("oculto");
})

botonRicky.addEventListener("click", function() {
    imgRicky.classList.toggle("oculto");
})

for(var i=0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function() {
        this.classList.toggle("oculto");
    })
}