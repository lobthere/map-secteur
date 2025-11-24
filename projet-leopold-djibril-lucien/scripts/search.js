const file = "projet-leopold-djibril-lucien/json/map.json" //the file path
const form = document.querySelector("#cherch").value;
const btn = document.querySelector("#search");
const carte = document.querySelector(".cart");
const read = document.querySelector("#recherche")

function validsearchbar(event){
    event.preventDefault()
    const recherche = document.querySelector("#recherche").value;
    if (recherche !== ""){
    };
}

function search(){
    const searchbar = document.querySelector("#recherche");
    searchbar.addEventListener("keyup", function (evt) {
        something(this.value)});
}

btn.addEventListener("click", validsearchbar); //on ecoute quand quelqu'un click sur le bouton
read.addEventListener("keyup",validsearchbar)

