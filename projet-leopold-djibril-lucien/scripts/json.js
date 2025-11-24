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
    const newSpan = document.createElement("span"); //create the span card
    newSpan.className = 'tf-nc'; //use the 'tf-nc' to use the proper css to make the tree
    
    const mainDiv = document.createElement("div"); // create the main div balise
    mainDiv.className = cardShape;

    const pretitreDiv = document.createElement("div");
    pretitreDiv.className = 'pretitre';

    const titreStrong = document.createElement('strong');
    titreStrong.textContent = name;
    pretitreDiv.appendChild(titreStrong);

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    const defRapideH2 = document.createElement('h2');
    defRapideH2.textContent = 'definition rapide';
    containerDiv.appendChild(defRapideH2);

    const defDiv = document.createElement('div');
    defDiv.className = 'definition';

    const h3Def = document.createElement('h3');
    h3Def.textContent = Description;
    defDiv.appendChild(h3Def);

    const spanInner = document.createElement('span');
    spanInner.className = 'picto';

    const subDiv = document.createElement('div');
    subDiv.className = 'sub';

    const imagePlus = document.createElement('img');
    imagePlus.src = 'projet-leopold-djibril-lucien/styles/src/16uMC.png';

    subDiv.appendChild(imagePlus);
    spanInner.appendChild(subDiv);

    mainDiv.appendChild(pretitreDiv);
    mainDiv.appendChild(containerDiv);
    mainDiv.appendChild(defDiv);
    mainDiv.appendChild(spanInner);
    
    
    newSpan.appendChild(mainDiv);

    const subElement = document.createElement('ul');
    
    document.getElementsByClassName(parent)[0].appendChild(newSpan); //add the children in his parent div
    document.getElementsByClassName(parent)[0].appendChild(subElement);
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
            try {
                toR.push([jsonInput['name'], jsonInput['card-identity'], [previous], jsonInput['description']]); //add it to the toR list
            }
            catch{
                toR.push([jsonInput['name'], jsonInput['card-identity'], [previous], 'pas de description pour l instant']); //add it to the toR list
            }
        }
        jsonInput['sub'].forEach(element => { //go into each list element
            searchInJson(element, attendu, jsonInput['name']); //search the lower element
        });
    }
    else {
        text = jsonInput['name'].toLowerCase(); //put the text in lowercase
        if (text.includes(attendu)){ //check if the attendue value is in the name 
            toR.push([jsonInput['name'], jsonInput['card-identity'],[previous], jsonInput['description']]) //add it to the toR list
        }
    }
}

function treeCreator(parent, parentSub){
    parentSub.forEach(element => {
        cardCreatorTree(element['name'], parent, element['description'], element['card-identity']);
    });
}

function treeCreatorFromStart(jsonInput){
    let holder = []
    jsonInput.forEach(element => {
        holder.push(element);
    });
    return holder
}

/*---------- Holding values ------------- */
let toR = []; // 0 -> name; 1 -> card-identity; 2 -> parents; 3 -> Description;

/*---------- Main function --------------*/
async function loadJsonFile(textToSearch, subCard) {
    /*
        load the json file and 
    */

    const response = await fetch('projet-leopold-djibril-lucien/json/map.json');
    const data = await response.json();

    //treeCreator('tf-tree', data['secteur']);
    toR = [];
    
    data['secteur'].forEach(element => {
        searchInJson(element, textToSearch.toLowerCase());
    });
    /*
    button = document.createElement('button');
    button.textContent = 'a';
    const temp = document.getElementById('artcart');
    temp.innerHTML = '';
    temp.appendChild(button)
    button.addEventListener('click', (unEvenement) => {
        console.log('b');
    });

    

    let test = treeCreatorFromStart(toR[0]);
    console.log(test);
    
    const temp = document.getElementById(subCard);
    temp.innerHTML = '';
    
    toR.forEach(element => {
        cardCreator(element[0], subCard, element[3], element[1]);
    });
    */
    const temp = document.getElementsByClassName('artcart')[0];
    temp.innerHTML = '';
    toR.forEach(element => {
        cardCreator(element[0][0], 'artcart', element[0][3], element[0][1]);
    });
    return toR
}
