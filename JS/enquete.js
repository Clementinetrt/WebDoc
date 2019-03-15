"use strict";

document.addEventListener("DOMContentLoaded", initialiser); //Mise en place de l'écouteur indiquant la fin de construction du DOM 

function initialiser(e) {

    var resume = document.getElementsByClassName('plus');
    for (var resumes of resume) {
        resumes.addEventListener("click", toggleEnquete);
    }
    
    
    var enqueteAffiche = document.getElementsByClassName('moins');
    for (var enqueteAffiches of enqueteAffiche) {
        enqueteAffiches.addEventListener("click", montreEnquete);
    }
    
}

function toggleEnquete() {

    var enqueteCache = document.getElementsByClassName('enquetePlus');

    for (var enqueteCaches of enqueteCache) {
        enqueteCaches.style.display = "block";
    }

}

function montreEnquete() {

    var enqueteMontre = document.getElementsByClassName('enquetePlus');

    for (var enqueteMontres of enqueteMontre) {

        enqueteMontres.style.display = "none";
    }

}