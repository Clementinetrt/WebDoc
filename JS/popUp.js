"use strict";

document.addEventListener("DOMContentLoaded", initialiser); //Mise en place de l'écouteur indiquant la fin de construction du DOM

function initialiser(e) {

    var aide = document.getElementById("aide");
    var aide2 = document.getElementById("suivant");
    var aide3 = document.getElementById("cestpartie");
    var quitter = document.getElementById("quitter");
    var quitter1 = document.getElementById("quitter1");

    document.getElementById("pop1").style.display = "none";
    document.getElementById("pop2").style.display = "none";


    aide.addEventListener("click", afficher);
    aide2.addEventListener("click", afficher2);
    aide3.addEventListener("click", close);

    quitter.addEventListener("click", cacher);
    quitter1.addEventListener("click", cacher1);
}

function afficher() {
    document.getElementById("pop1").style.display = "block";
    document.getElementById("aide").style.display = "none";

}

function afficher2() {
    document.getElementById("pop1").style.display = "none";
    document.getElementById("pop2").style.display = "block";
}

function close() {
    document.getElementById("pop2").style.display = "none";
    document.getElementById("aide").style.display = "block";

}

function cacher() {
    document.getElementById("aide").style.display = "block";
    document.getElementById("pop2").style.display = "none";
    document.getElementById("pop1").style.display = "none";
}

function cacher1() {
    document.getElementById("aide").style.display = "block";
    document.getElementById("pop2").style.display = "none";
    document.getElementById("pop1").style.display = "none";
}
