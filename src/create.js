
//Funtion the create list button
let makeButton = function(){
    //grab main div
let mainDiv = document.getElementById("content")
//mainDiv.innerText = "";
//create a button div and button added to it
let createButtonDiv = document.createElement("div");
createButtonDiv.setAttribute("id", "createButtonDiv");

let createButton = document.createElement("button");
createButton.setAttribute("id", "createButton")
createButton.innerText = "Create Project"

// add button to button div and button div to main
createButtonDiv.appendChild(createButton)
mainDiv.appendChild(createButtonDiv)

let tabDiv = document.getElementById("tabs")
tabDiv.appendChild(createButton);

//listen to button click, stop bubble and render
createButton.addEventListener("click", renderModal)

}

//creates dialog, form and inputs Study this later
let renderModal = function(){
    let mainDiv = document.getElementById("content")
    mainDiv.innerText = "";
    document.getElementById("myDialog").showModal(); 
}



export { makeButton, renderModal }
