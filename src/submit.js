import { makeButton,  } from "./create"; 
import { mainFactory, listofTodos, tabs } from "./home";
import { removeCard } from "./remove";
import { notesMain, myFactory, newUser } from "./notes";


//this function handles submit, pushes to list, updates html
function submit(){
    tabs()
    
    let submit = document.getElementById("submit");
    submit.addEventListener("click", () => {
    //set variables to doms values
    let name = document.getElementById("name").value
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let duedate = document.getElementById("duedate").value;
    let priority = getPriority()
    let testcase = myFactory()
    
    //create a object instance of main Factory
    let newTodo = mainFactory(name, title, description, 
        duedate, priority, testcase)

    listofTodos.push(newTodo)
    
    let mainDiv = document.getElementById("content");
    mainDiv.innerText = ""

    createCard()
    
    })
}


//radio button prioroty function
let getPriority = () => {
    let ele = document.getElementsByName('priority')
    for (let i = 0; i < ele.length; i++)
        if (ele[i].checked === true){
            return ele[i].value
    }
}

let p;

let createCard = function () {
    //talk to main div
    let mainDiv = document.getElementById("content")
    mainDiv.innerText = "";
    //create card div
    let newDiv = document.createElement("div")
    newDiv.setAttribute("class", "newDiv")
    mainDiv.appendChild(newDiv)

    //loop list to create a array
    for (let i = 0; i < listofTodos.length; i++){
        
        //create card div
        let cardDiv = document.createElement("div")
        cardDiv.setAttribute("class", "cards")
        //get the property values from the obj and index of
        let textName = listofTodos[i].name
        let textTitle = listofTodos[i].title
        let textDescription = listofTodos[i].description
        let duedate = listofTodos[i].dueDate
        let priority = listofTodos[i].priority
        //sets var for index
        p = i;

        let noteBtn = document.createElement("button")
        noteBtn.setAttribute("class", "noteBtn")
        noteBtn.innerText = "Todo List"
        noteBtn.addEventListener("click", loadNotes)

        let viewBtn = document.createElement("button")
        viewBtn.setAttribute("class", "viewBtn")
        viewBtn.innerText = "View Card"
        viewBtn.addEventListener("click", viewCard)
        
        let removeBtn = document.createElement("button")
        removeBtn.setAttribute("class", "removeBtn")
        removeBtn.innerText = "remove card"
        removeBtn.addEventListener("click", removeCard)
        //layout of cards project
        cardDiv.innerText += 
        textName + "\n" + 
        textTitle + "\n" + 
        textDescription + "\n" + 
        duedate + "\n" + 
        priority + "\n" 
        //adds elements to divs
        cardDiv.appendChild(noteBtn)
        cardDiv.appendChild(viewBtn)
        cardDiv.appendChild(removeBtn)
        newDiv.appendChild(cardDiv)

        let newUser = myFactory()
        console.log(newUser)
    }
}

//creates a card view solo
let viewCard = () => {
    let mainDiv = document.getElementById("content")
    mainDiv.innerText = "";
    mainDiv.setAttribute('style','font-size:36px')
    
    let textName = listofTodos[p].name
    let textTitle = listofTodos[p].title
    let textDescription = listofTodos[p].description
    let duedate = listofTodos[p].dueDate
    let priority = listofTodos[p].priority
    

    let html = ""

    html += 
    "\n" + 
    "Name: " + textName + "\n" + 
    "Title: " + textTitle + "\n" + 
    "Description: " + textDescription + "\n" + 
    "Due Date: " + duedate + "\n" + 
    "Priority: " + priority + "\n" 

    mainDiv.innerText += html

}

//loads notes page
let loadNotes = () => {
    let mainDiv = document.getElementById("content")
    mainDiv.innerText = "";
    //creates dialog, form and inputs Study this later
    notesMain()
}
    


export { submit, createCard, getPriority,  }
