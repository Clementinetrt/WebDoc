"use strict";

document.addEventListener("DOMContentLoaded", initialiser); //Mise en place de l'écouteur indiquant la fin de construction du DOM

function initialiser(e) {
    var commentaires = document.getElementsByClassName('boutton');

    for (var commentaire of commentaires){
      commentaire.addEventListener("click", afficher);

  }
}

function afficher() {

    var affiche = document.getElementsByClassName('com')[this.dataset.value];
    affiche.style.display = "block";

    setTimeout(function(){ cacher(affiche) }, 4000);
}

function cacher(affiche) {
    affiche.style.display = "none";
}
