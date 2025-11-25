/*
make the tree
*/

function cardCreatorInit(name, parent, Description, cardShape, jsonInput, previous, previousName){
    /*
        Create the card for the tree
            name: str -> the name of the card
            parent: str -> it s parent id
            Description: str -> the description that we will load on the card
            cardShape: str -> what format it will have
            jsonInput: array -> the current json file tree
    */
    const initLi = document.createElement('li');

    const newSpan = document.createElement("span"); //create the span card
    newSpan.className = 'tf-nc'; //use the 'tf-nc' to use the proper css to make the tree
    
    const mainDiv = document.createElement("div"); // create the main div balise
    mainDiv.className = cardShape;
    if (!(cardShape === 'vide-lower')){
        function toDoWhenNotVideLower(){
            specialRemover('init');
            cardCreatorInit(name, parent, Description, cardShape, jsonInput, previous, name);
            nextSpecial(jsonInput, name);
        }
        mainDiv.addEventListener("click",toDoWhenNotVideLower);
    }

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

    mainDiv.appendChild(pretitreDiv);
    mainDiv.appendChild(containerDiv);
    mainDiv.appendChild(defDiv);
    
    newSpan.appendChild(mainDiv);

    
    initLi.appendChild(newSpan); //add the children in his parent div

    const subElement = document.createElement('ul');
    subElement.className = name;
    initLi.appendChild(subElement);


    const main = document.getElementsByClassName(parent)[0];
    main.appendChild(initLi);
}

function cardCreatorForSearchBar(name, parent, Description, cardShape){
    /*
        Create the card for the tree
            name: str -> the name of the card
            parent: str -> it s parent id
            Description: str -> the description that we will load on the card
            cardShape: str -> what format it will have
            jsonInput: array -> the current json file tree
    */
    const initDiv = document.createElement('div');
    initDiv.className = 'divSearch';
    

    const newSpan = document.createElement("span"); //create the span card
    newSpan.className = 'cartSearch'; //use the 'artcart' to use the proper css to make the tree
    
    const mainDiv = document.createElement("div"); // create the main div balise
    mainDiv.className = cardShape;

    function ifClicked(){
        const temp = document.getElementsByClassName('resultIfClicked')[0];
        temp.innerHTML = '';
        cardCreatorForSearchBar(name, 'resultIfClicked', Description, cardShape);
    }

    mainDiv.addEventListener('click', ifClicked);

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

    mainDiv.appendChild(pretitreDiv);
    mainDiv.appendChild(containerDiv);
    mainDiv.appendChild(defDiv);
    
    newSpan.appendChild(mainDiv);

    
    initDiv.appendChild(newSpan); //add the children in his parent div

    const main = document.getElementsByClassName(parent)[0];
    main.appendChild(initDiv);
}

function cardCreator(name, parent, Description, cardShape, jsonInput, previous, previousName){
    /*
        Create the card for the tree
            name: str -> the name of the card
            parent: str -> it s parent id
            Description: str -> the description that we will load on the card
            cardShape: str -> what format it will have
            jsonInput: array -> the current json file tree
    */
    const initLi = document.createElement('li');

    const newSpan = document.createElement("span"); //create the span card
    newSpan.className = 'tf-nc'; //use the 'tf-nc' to use the proper css to make the tree
    
    const mainDiv = document.createElement("div"); // create the main div balise
    mainDiv.className = cardShape;
    if (!(cardShape === 'vide-lower')){
        function toDoWhenNotVideLower(){
            specialRemover(previousName);
            cardCreator(name, parent, Description, cardShape, jsonInput, previous, previousName);
            next(jsonInput, name);
        }
        mainDiv.addEventListener("click",toDoWhenNotVideLower);
    }

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

    mainDiv.appendChild(pretitreDiv);
    mainDiv.appendChild(containerDiv);
    mainDiv.appendChild(defDiv);
    
    newSpan.appendChild(mainDiv);

    
    initLi.appendChild(newSpan); //add the children in his parent div

    const subElement = document.createElement('ul');
    subElement.className = name;
    initLi.appendChild(subElement);


    const main = document.getElementsByClassName(parent)[0];
    main.appendChild(initLi);
}

function cardCreatorVideLower(name, parent, Description, cardShape, jsonInput, previous){
    /*
        Create the card for the tree
            name: str -> the name of the card
            parent: str -> it s parent id
            Description: str -> the description that we will load on the card
            cardShape: str -> what format it will have
            jsonInput: array -> the current json file tree
    */
    const initLi = document.createElement('li');

    const newSpan = document.createElement("span"); //create the span card
    newSpan.className = 'tf-nc'; //use the 'tf-nc' to use the proper css to make the tree
    
    const mainDiv = document.createElement("div"); // create the main div balise
    mainDiv.className = cardShape;
    if (!(cardShape === 'vide-lower')){
        function toDoWhenNotVideLower(){
            specialRemover(previousName);
            cardCreator(name, parent, Description, cardShape, jsonInput, previous, previousName);
            next(jsonInput, name);
        }
        mainDiv.addEventListener("click",toDoWhenNotVideLower);
    }

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

    mainDiv.appendChild(pretitreDiv);
    mainDiv.appendChild(containerDiv);
    mainDiv.appendChild(defDiv);
    
    newSpan.appendChild(mainDiv);

    
    initLi.appendChild(newSpan); //add the children in his parent div

    const main = document.getElementsByClassName(parent)[0];
    main.appendChild(initLi);
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

    toR = [];
    
    data['secteur'].forEach(element => {
        searchInJson(element, textToSearch.toLowerCase());
    });

    const temp = document.getElementsByClassName(subCard)[0];
    temp.innerHTML = '';
    toR.forEach(element => {
        cardCreatorForSearchBar(element[0], subCard, element[3], element[1]);
    });
    return toR
}

function next(jsonInputFile, parentName){
    //remove previous card
    jsonInputFile['sub'].forEach(element => {
        if (element['card-identity'] === 'vide-lower'){
            cardCreatorVideLower(element['name'], parentName, element['description'], element['card-identity'], element, jsonInputFile, parentName);
        }else{
            cardCreator(element['name'], parentName, element['description'], element['card-identity'], element, jsonInputFile, parentName);
        }
    })
}

function specialRemover(previousName){
    toRemove = document.getElementsByClassName(previousName)[0];
    toRemove.innerHTML = '';
}

function nextSpecial(jsonInputFile, parentName){
    //remove previous card
    jsonInputFile.forEach(element => {
        cardCreator(element['name'], 'externatic', element['description'], element['card-identity'], element, jsonInputFile, 'externatic');
    })
}