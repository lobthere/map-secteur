/*
make the tree
*/

const treeJSON = require('projet-leopold-djibril-lucien/json/map.json');
console.log(treeJSON);

function cardCreator(name, parent, description, cardShape) {
    /*
        Create the card for the tree
            name: str -> the name of the card
            parent: str -> it s parent id
            description: str -> the description that we will load on the card
            cardShape: str -> what format it will have
    */
    const newDiv = document.createElement("div"); //create the div card
    
    newDiv.className = cardShape; //use the cardShape to use the proper css
    
    const title = newDiv.createElement("h2"); // create the title balise
    const titleText = document.createTextNode(name); //create the text balise
    title.appendChild(titleText); //add the text to the balise

    const description = newDiv.createElement("h3"); // create the title balise
    const descriptionText = document.createTextNode(description); //create the text balise
    title.appendChild(descriptionText); //add the text to the balise

    document.getElementById(parent).appendChild(newDiv); //add the children in his parent div
}