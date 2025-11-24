const form = document.querySelector("#cherch").value;
const btn = document.querySelector("#search");
const carte = document.querySelector(".cart");

function validsearchbar(event){ //create function that valid the searchbar text typed in
    event.preventDefault() //prevent the default event so it doesn't reset
    const recherche = document.querySelector("#recherche").value;
    if (recherche !== ""){
        console.log(loadJsonFile(recherche, 'artcart')); //si la recherche correspond a du contenue l'afficher.
    };
}

function search(){
    const searchbar = document.querySelector("#recherche");
    searchbar.addEventListener("keyup", function (evt) {
        something(this.value)});    
}
search();
btn.addEventListener("click", validsearchbar); //on ecoute quand quelqu'un click sur le bouton
searchbar.addEventListener("keyup",validsearchbar);