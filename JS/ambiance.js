"use strict";

document.addEventListener("DOMContentLoaded", initialiser); //Mise en place de l'écouteur indiquant la fin de construction du DOM

function initialiser(e) {

    var son = document.getElementById("gramophone");

    son.addEventListener("click", stop);
   // son.addEventListener("click", play);

}



function stop() {

        audioElement.pause();

    /*document.getElementById('gramophoneMute').style.display = "block";
    document.getElementById('gramophone').style.display = "none";*/

}

/*function play() {
     if (audioElement.paused) {
        audioElement.play();
    }
    else {
        audioElement.pause();
    }
    document.getElementById('gramophoneMute').style.display = "none";
    document.getElementById('gramophone').style.display = "block";

}*/
