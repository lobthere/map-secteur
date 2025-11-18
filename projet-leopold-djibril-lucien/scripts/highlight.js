/*
make the tree
*/

function cardCreator(name, parent, Description, cardShape){
    /*
        Create the card for the tree
            name: str -> the name of the card
            parent: str -> it s parent id
            Description: str -> the description that we will load on the card
            cardShape: str -> what format it will have
    */
    const newDiv = document.createElement("div"); //create the div card
    
    newDiv.className = cardShape; //use the cardShape to use the proper css
    
    const title = document.createElement("h2"); // create the title balise
    const titleText = document.createTextNode(name); //create the text balise
    title.appendChild(titleText); //add the text to the balise
    newDiv.appendChild(title);

    const description = document.createElement("p"); // create the title balise
    const DescriptionText = document.createTextNode(Description); //create the text balise
    description.appendChild(DescriptionText); //add the text to the balise
    newDiv.appendChild(description);

    document.getElementById(parent).appendChild(newDiv); //add the children in his parent div
}

function cardRemover(name){
    /*
        Remove the card from the tree, and all it s children
            name: str -> the name used when creating div
    */
    currentDiv = document.getElementsByClassName(name); //find the current div
    currentDiv.remove(); //remove it and all it s children
}

fetch('./projet-leopold-djibril-lucien/json/map.json')
    .then(response => response.json())
    .then(data => {
        console.log(data['secteur'][0]['name'])
        cardCreator(data['secteur'][0]['name'], 'tech-list', 'description', data['secteur'][0]['card-identity']);
    });