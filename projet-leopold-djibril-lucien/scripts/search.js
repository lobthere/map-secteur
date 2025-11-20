const file = "projet-leopold-djibril-lucien/json/map.json"
const form = document.querySelector("#cherch").value;
const btn = document.querySelector("#search");
const carte = document.querySelector(".cart");

function validsearchbar(event){
    event.preventDefault()
    const rechercher = document.querySelector("#recherche").value;
    fetch(file)
    .then((techno)=>{  const BoxName = document.querySelector(".pretitre").value})
    if (recherche!==""){
        carte = carte.filter((recherche) => carte.toLowerCase().includes(input.toLowerCase()))
      }
       carte.forEach((carte) => {
    
        list.insertAdjacentHTML("beforeend", card);
      })
}
  
console.log(btn)
btn.addEventListener("click", validsearchbar); //on ecoute quand quelqu'un click sur le bouton
