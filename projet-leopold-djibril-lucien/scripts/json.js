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

    searchInJson(data['secteur'][0], 'DEV FRONT END', []);

    //data['secteur'].forEach(element => {
    //    searchInJson(element, 'DEV FRONT END', [], 0);
    //});
}


function searchInJson(jsonInput, attendu, currentPath){
    /*
        depth search in the json
            jsonInput: dict -> the dict that hold the card
            attendu: str -> the expected value for the name
            currentPath: list -> hold the current path in the json file of the card, ex : ["secteur", 0, 0, 0, 0, 3]; between every number is expected a "sub" for the real path
    */
    let cardIdentity = jsonInput['card-identity']; //get the name value from the array
    let cardName = jsonInput['name']; //get the card name

    let position = 

    /*___ Test some valuse ___*/
    console.log(cardName);
    console.log(cardIdentity);
    console.log("---------------------------------------")
    console.log(jsonInput);
    console.log(attendu);
    console.log(currentPath);
    console.log(position);
    console.log("_____________________________");
    console.log(jsonInput['sub'][position]);
    console.log("_____________________________")
    console.log("NEXT VALUE \n \n \n")
    
    

    //check if the card has a sub categorie, but checking it s card identity
    if (cardIdentity === "vide lower"){
        //tell if the card is the right one
        if (cardName === attendu){
            console.log("hello");
            return [attendu, jsonInput['card-identity'], currentPath, jsonInput['description']]; //return all the element to make the card
        }
        //check if the next value is in the array
        else if (position == jsonInput.length()) {
            currentPath.pop(); //remove the last element from the path 
            currentPath[currentPath.length() - 2] += 1; // add one to the previous 
            searchInJson(jsonInput, attendu, currentPath, position);
        }
        else if (position === 0){
            currentPath.push(position);
        }
        else{
            currentPath[currentPath.length() - 1] = position; //edit the position in the path
            searchInJson(jsonInput, attendu, currentPath, position + 1); //search the next value in 
        }
    }

    //do the cards who have a sub categorie in them
    else{
        if (cardName === attendu){
            console.log("hello");
            return [attendu, jsonInput['card-identity'], currentPath]; //return all the element to make the card
        } else if (0 === 0) {
            console.log("hello world!")
        }
    }
}

const jsonFile = loadJsonFile();

console.log(jsonFile);
//cardCreator(data['secteur'][0]['name'], 'tech-list', 'description', data['secteur'][0]['card-identity']);
//console.log(data['secteur'][0]['name'])