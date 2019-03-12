"use strict";

document.addEventListener("DOMContentLoaded", initialiser); //Mise en place de l'écouteur indiquant la fin de construction du DOM

function initialiser(e) {

    var son = document.getElementById("gramophone");
    son.addEventListener("click", stop);
}

function stop() {
    var gramo = document.getElementById("ambiance");
    gramo.pause();

    var mute = document.getElementById("gramophoneMute");
    mute.addEventListener("click", play);

    document.getElementById('gramophoneMute').style.display = "block";
    document.getElementById('gramophone').style.display = "none";
}

function play() {

    var gramoMute = document.getElementById("ambiance");
    gramoMute.play();

    document.getElementById('gramophoneMute').style.display = "none";
    document.getElementById('gramophone').style.display = "block";

}
