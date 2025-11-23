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

function cardCreatorTree(name, parent, Description, cardShape){
    /*
        Create the card for the tree
            name: str -> the name of the card
            parent: str -> it s parent id
            Description: str -> the description that we will load on the card
            cardShape: str -> what format it will have
            position: int -> the position of the of the card in the array
    */
    const li = document.createElement("li"); //create for the tree
    li.className = 'tf-nc'; //add the class name for the tree

    const newDiv = document.createElement("div"); //create the div card
    newDiv.className = cardShape; //use the cardShape to use the proper css
    li.appendChild(newDiv); //add the div to the li 

    const title = document.createElement("h2"); // create the title balise
    const titleText = document.createTextNode(name); //create the text balise
    title.appendChild(titleText); //add the text to the balise
    newDiv.appendChild(title);

    const description = document.createElement("p"); // create the title balise
    const DescriptionText = document.createTextNode(Description); //create the text balise
    description.appendChild(DescriptionText); //add the text to the balise
    newDiv.appendChild(description);


    document.getElementById(parent).appendChild(li); //add the children in his parent div
}

function cardRemover(name){
    /*
        Remove the card from the tree, and all it s children
            name: str -> the name used when creating div
    */
    currentDiv = document.getElementsByClassName(name); //find the current div
    currentDiv.remove(); //remove it and all it s children
}


async function loadJsonFile(textToSearch, subCard) {
    /*
        load the json file and 
    */

    const response = await fetch('projet-leopold-djibril-lucien/json/map.json');
    const data = await response.json();

    console.log(data['secteur']);

    treeCreator('tf-tree', data['secteur']);

    let toR = []; // 0 -> name; 1 -> card-identity; 2 -> parents; 3 -> Description;
    let hasAppeared = []; //if has already appeared, hold it
    data['secteur'].forEach(element => {
        searchInJson(element, textToSearch.toLowerCase());
    });
    /*
    const temp = document.getElementById(subCard);
    temp.innerHTML = '';
    
    toR.forEach(element => {
        cardCreator(element[0], subCard, element[3], element[1]);
    });
    */
    return toR
}


function searchInJson(jsonInput, attendu, previous){
    /*
        depth search in the json
            jsonInput: dict -> the dict that hold the card
            attendu: str -> the expected value for the name
            previous: str -> store the name of the last 
    */
    if (jsonInput['card-identity'] !== 'vide-lower'){ //if card not the last row
        text = jsonInput['name'].toLowerCase(); //put text in lowercase
        if (text.includes(attendu)){ //check if the attendue value is in the name 
            if (!(hasAppeared.includes(attendu))){
                try {
                    toR.push([jsonInput['name'], jsonInput['card-identity'], [previous], jsonInput['description']]); //add it to the toR list
                    hasAppeared.push(attendu);
                }
                catch{
                    toR.push([jsonInput['name'], jsonInput['card-identity'], [previous], 'pas de description pour l instant']); //add it to the toR list
                    hasAppeared.push(attendu);
                }
            }else{
                toR[hasAppeared.indexOf(attendu)][2].push(previous);
            };
        }
        jsonInput['sub'].forEach(element => { //go into each list element
            searchInJson(element, attendu, jsonInput['name']); //search the lower element
        });
    }
    else {
        text = jsonInput['name'].toLowerCase(); //put the text in lowercase
        if (text.includes(attendu)){ //check if the attendue value is in the name 
            if (!(hasAppeared.includes(attendu))){
                toR.push([jsonInput['name'], jsonInput['card-identity'],[previous], jsonInput['description']]) //add it to the toR list
                hasAppeared.push(attendu);
            } else{
                toR[hasAppeared.indexOf(attendu)][2].push(previous);
            }
        }
    }
}

function treeCreator(parent, parentSub){
    parentSub.forEach(element => {
        cardCreatorTree(element['name'], parent, element['description'], element['card-identity']);
    });
}