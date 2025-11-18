import treeJSON from '../json/map.json';
/*
make the tree
*/

console.log(treeJSON);

//function cardCreator(name, parent, description, cardShape) {
//    /*
//        Create the card for the tree
//            name: str -> the name of the card
//            parent: str -> it s parent id
//            description: str -> the description that we will load on the card
//            cardShape: str -> what format it will have
//    */
//    const newDiv = document.createElement("div"); //create the div card
//    
//    newDiv.className = cardShape; //use the cardShape to use the proper css
//    
//    const title = newDiv.createElement("h2"); // create the title balise
//    const titleText = document.createTextNode(name); //create the text balise
//    title.appendChild(titleText); //add the text to the balise
//
//    const description = newDiv.createElement("h3"); // create the title balise
//    const descriptionText = document.createTextNode(description); //create the text balise
//    title.appendChild(descriptionText); //add the text to the balise
//
//    document.getElementById(parent).appendChild(newDiv); //add the children in his parent div
//}
//
//function cardRemover(name){
//    /*
//        Remove the card from the tree, and all it s children
//            name: str -> the name used when creating div
//    */
//    const currentDiv = document.getElementsByClassName(name); //find the current div
//    currentDiv.remove(); //remove it and all it s children
//}