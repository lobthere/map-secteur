const file = "projet-leopold-djibril-lucien/json/map.json" //the file path
const form = document.querySelector("#cherch").value;
const btn = document.querySelector("#search");
const carte = document.querySelector(".cart");
const read = document.querySelector("#recherche")

function validsearchbar(event){
    event.preventDefault()
    const recherche = document.querySelector("#recherche").value;
    if (recherche !== ""){
        loadJsonFile(recherche, 'searchHolderJs');
    };
}

function search(){
    const searchbar = document.querySelector("#recherche");
    searchbar.addEventListener("keyup", function (evt) {
        something(this.value); 
    })
};

async function main(){
    const response = await fetch('projet-leopold-djibril-lucien/json/map.json');
    const data = await response.json();

    cardCreator(data['Entreprise'], 'init', data['annee'], 'plein-bold', data['secteur']);

    data['secteur'].forEach(element => {
        cardCreator(element['name'], 'externatic', element['description'], element['card-identity'], element, data['secteur']);
    });
}
main();

btn.addEventListener("click", validsearchbar); //on ecoute quand quelqu'un click sur le bouton
read.addEventListener("keyup",validsearchbar);