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

    toR = []

    data['secteur'].forEach(element => {
        searchInJson(element, 'j', [], 0);
    });

    console.log(toR);
}


function searchInJson(jsonInput, attendu){
    /*
        depth search in the json
            jsonInput: dict -> the dict that hold the card
            attendu: str -> the expected value for the name
    */
    //let cardIdentity = jsonInput['card-identity']; //get the name value from the array
    //let cardName = jsonInput['name']; //get the card name
    //
    //let toSend = [];
    //
    ///*___ Test some valuse ___*/
    //console.log("---------------------------------------")
    //console.log(cardName);
    ////console.log(cardIdentity);
    //console.log(jsonInput);
    ////console.log(attendu);
    ////console.log(currentPath);
    ////console.log(position);
    ////console.log("_____________________________");
    ////console.log(jsonInput['sub'][position]);
    ////console.log("_____________________________")
    ////console.log("NEXT VALUE \n \n \n")
    //console.log("---------------------------------------")
    //
    //
    //
    ////check if the card has a sub categorie, but checking it s card identity
    //if (cardIdentity === "vide lower"){
    //    //tell if the card is the right one
    //    if (cardName.includes(attendu)){
    //        toSend.push([attendu, jsonInput['card-identity'], currentPath, jsonInput['description']]); //add all the element to make the card in the toSend list
    //    }
    //    //check if the next value is in the array
    //    else if (position + 1 == jsonInput.length) {
    //        currentPath.pop(); //remove the last element from the path 
    //        position = 0
    //        searchInJson(jsonInput, attendu, currentPath, position);
    //    }
    //    else{
    //        currentPath[currentPath.length - 1] = position; //edit the position in the path
    //        searchInJson(jsonInput, attendu, currentPath, position + 1); //search the next value in 
    //    }
    //}
    //
    //
    ////do the cards who have a sub categorie in them
    //else{
    //    //if it s one of the cards
    //    if (cardName.includes(attendu)){
    //        toSend.push([attendu, jsonInput['card-identity'], currentPath]); //return all the element to make the card
    //    };
    //    
    //    // if the next card is the last one 
    //    if (currentPath[currentPath.length - 1 ] + 1 == jsonInput.length) {
    //        currentPath.pop();
    //        currentPath[currentPath.length - 2] += 1;
    //        position = 0;
    //        searchInJson(jsonInput, attendu, currentPath, position);
    //    }
    //    else {
    //        searchInJson(jsonInput['sub'][position], attendu, currentPath, position + 1);
    //    };
    //
    //    return toSend;
    //}
    //
    //return toSend

    if (jsonInput['card-identity'] !== 'vide lower'){ //if card not the last row
        if (jsonInput['name'].includes(attendu)){ //check if the attendue value is in the name 
            toR.push([jsonInput['name'], jsonInput['card-identity']]) //add it to the toR list
        }
        jsonInput['sub'].forEach(element => { //go into each list element
            searchInJson(element, attendu); //search the lower element
        });
    }
    else {
        if (jsonInput['name'].includes(attendu)){ //check if the attendue value is in the name 
            toR.push([jsonInput['name'], jsonInput['card-identity'], jsonInput['description']]) //add it to the toR list
        }
    }

    console.log(jsonInput['name']);
}

loadJsonFile();


//cardCreator(data['secteur'][0]['name'], 'tech-list', 'description', data['secteur'][0]['card-identity']);
//console.log(data['secteur'][0]['name'])