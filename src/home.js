import "./style.css";
import { makeButton } from "./create";
import { createCard, getPriority, submit } from "./submit";


// where all of the created list stored in a array
let listofTodos = [];

//creates a home button on submit page after first card created
let tabs = function() {
    let tabDiv = document.getElementById("tabs")
    let homeButton = document.createElement("button")
    homeButton.setAttribute("id", "homebtn")
    homeButton.innerText = "Home"
    tabDiv.appendChild(homeButton)
    homeButton.addEventListener("click", createCard)
}

//main factory function to create list
/*const mainFactory = function(name, title, description, dueDate) {
    
    return { 
        name: name,
        title: title,  
        description: description,
        dueDate: dueDate, 
        priority: getPriority(),
        
    }
}*/

function myFactory(){
    let obj = {}
    //Name var to use for the obj name newUser
    let name = document.getElementById("name").value
    obj[(name)] = new Array()

    return obj
}


const newFactory = function(name, title, description, dueDate) {
    const mainObj = mainFactory(name, title, description, dueDate);
    const myObj = myFactory();
  
    return {
        mainData: mainObj,
        myData: myObj
    };
  };

//main function that homes the create project button and submit
let homeMainFunction = () => {
    
    makeButton()
    submit()
}

export { homeMainFunction, newFactory, tabs, listofTodos }
//mainFactory was removed for exports