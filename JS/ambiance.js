"use strict";

document.addEventListener("DOMContentLoaded", initialiser); //Mise en place de l'écouteur indiquant la fin de construction du DOM 

function initialiser(e) {

    var son = document.getElementById("gramophone");
    var mute = document.getElementById("gramophoneMute");

    mute.addEventListener("click", stop);
   // son.addEventListener("click", play);
    
}



function stop() {
     if (audioElement.play) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
    
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