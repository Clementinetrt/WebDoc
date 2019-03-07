"use strict";

document.addEventListener("DOMContentLoaded", initialiser); //Mise en place de l'écouteur indiquant la fin de construction du DOM 

function initialiser(e) {

    var full = document.getElementById("ecran");

    full.addEventListener("click", toggleFullScreen);

}


function toggleFullScreen() {

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();

    } else {

        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}