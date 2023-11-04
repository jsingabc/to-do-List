import "./style.css";
import { makeButton } from "./create";
import { createCard, getPriority, submit } from "./submit" //displayList
import { myFactory } from "./notes";

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
const mainFactory = function(name, title, description, dueDate) {
    let testcase = Object.create(myFactory);
    return { 
        name: name,
        title: title,  
        description: description,
        dueDate: dueDate, 
        priority: getPriority(),
        testcase: testcase,
    }
}

//let testCase = new mainFactory({name, title, description, dueDate}).myFactory({"sam": ('test', 'testing')})


//main function that homes the create project button and submit
let homeMainFunction = () => {
    
    makeButton()
    submit()
}

export { homeMainFunction, mainFactory, tabs, listofTodos }