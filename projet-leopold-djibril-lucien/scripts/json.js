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


async function loadJsonFile() {
    const response = await fetch('projet-leopold-djibril-lucien/json/map.json');
    const data = await response.json();

    data['secteur'].forEach(element => {
        console.log(searchInJson(element));
    });

    return data
}

function searchInJson(jsonInput, attendu, currentPath, position){
    /*
        depth search in the json
            jsonInput: dict -> the dict that hold the card
            attendu: str -> the expected value for the name
            currentPath: list -> hold the current path in the json file of the card
            position: int -> hold the current position in the array
    */
    let cardIdentity = jsonInput['card-identity']; //get the name value from the array
    let cardName = jsonInput['name']; //get the card name
    //check if the card has a sub categorie, but checking it s card identity
    if (cardIdentity === "vide lower"){
        //tell if the card is the right one
        if (cardName === attendu){
            return [result, jsonInput['card-identity'], currentPath, jsonInput['description']]; //return all the element to make the card
        }
        //check if the next value is in the array
        else if (position == jsonInput) {
            None;
        }
        else{
            searchInJson(jsonInput, attendu, currentPath, position + 1);
        }
    }
    
    //check if we have found the card by checking if the name is the same as what we want
    //if (result === attendu) {
    //    //only the card with "vide lower" have a description parameter
    //    if (jsonInput['card-identity'] === "vide lower") {
    //        
    //    } else {
    //        return [result, jsonInput['card-identity'], currentPath]; //same as the line just upper
    //    }
    //} else if (jsonInput['card-identity'] === "vide lower"){
    //    currentPath.push(jsonInput['name']);
    //    searchInJson(jsonInput['sub'], attendu, currentPath);
    //}
    return result;
}

const jsonFile = loadJsonFile();

console.log(jsonFile);
//cardCreator(data['secteur'][0]['name'], 'tech-list', 'description', data['secteur'][0]['card-identity']);
//console.log(data['secteur'][0]['name'])