const file = "projet-leopold-djibril-lucien/json/map.json" //the file path
const form = document.querySelector("#cherch").value;
const btn = document.querySelector("#search");
const carte = document.querySelector(".cart");

function validsearchbar(event){
    event.preventDefault()
    const recherche = document.querySelector("#recherche").value;
    if (recherche !== ""){
        loadJsonFile(recherche, 'artcart');        
    };
    
}

btn.addEventListener("click", validsearchbar); //on ecoute quand quelqu'un click sur le bouton


