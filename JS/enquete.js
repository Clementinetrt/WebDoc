"use strict";

document.addEventListener("DOMContentLoaded", initialiser);  

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
    var enqueteResumes = document.getElementsByClassName('resume');

    for (var enqueteCaches of enqueteCache) {
        enqueteCaches.style.display = "block";
        
    }
    
    for (var enqueteResume of enqueteResumes) {
        enqueteResume.style.display = "none";
        
    }

}

function montreEnquete() {

    var enqueteMontre = document.getElementsByClassName('enquetePlus');
    var enqueteResumer = document.getElementsByClassName('resume');

    for (var enqueteMontres of enqueteMontre) {

        enqueteMontres.style.display = "none";
    }
    
    for (var enqueteResumers of enqueteResumer) {
        enqueteResumers.style.display = "block";
        
    }

}