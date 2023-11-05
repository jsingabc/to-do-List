import { homeMainFunction, listofTodos, mainFactory, newFactory } from "./home";
import { createCard, getPriority, newUser } from "./submit";



function myFactory(){
    let obj = {}
    //Name var to use for the obj name newUser
    let name = document.getElementById("name").value
    obj[(name)] = new Array()

    return obj
}

let notes = [];
function notesMain(){    
    
        
    let mainDiv = document.getElementById("content");
    mainDiv.innerText = "";

    let name = document.getElementById("name").value
    console.log(name)
    
    let formDiv = document.createElement("div")
    formDiv.setAttribute("id", "div")
    mainDiv.appendChild(formDiv);

    let form = document.createElement("form")
    form.setAttribute("id", "form");
    formDiv.appendChild(form)
    form.setAttribute("method", "post");

    // Create an input element for the name.
    var notesInput = document.createElement("input");
    notesInput.setAttribute("type", "text");
    notesInput.setAttribute("notes", "notes");
    notesInput.setAttribute("id", "notes")
    form.appendChild(notesInput)

    var addButton = document.createElement("input");
    addButton.setAttribute("type", "submit");
    addButton.setAttribute("id", "submit");
    addButton.setAttribute("value", "Add a note");
    form.appendChild(addButton)


    //creates a ul for the list to be in
    let listDiv = document.createElement('ul')
    listDiv.setAttribute("id", "ul")
    mainDiv.appendChild(listDiv)

    //button on todoList Note page to add a note
    let submit = document.getElementById("submit");
    let newUser = newFactory()
    
    submit.addEventListener("click", (event) => {
        event.preventDefault()
        console.log(newUser)
        console.log(newUser)
        
    

        

        let checkNote = document.getElementById("notes").value
        let n = document.createTextNode(checkNote);

        let li = document.createElement("li")
        li.setAttribute("class", "li")
        li.appendChild(n)
        
        if (checkNote == '') {
            alert("add something first")
        } else {
            document.getElementById("ul").appendChild(li)
        }
            newUser[(name)].push(checkNote)
            
            
            
    let removeNote = document.querySelectorAll(".li")
    removeNote.forEach(button => {
    button.addEventListener("click", () => {
        let removeTarget = Array.prototype.indexOf.call(removeNote, button);

            newUser[(name)].splice(removeTarget, 1)
            removeNote[removeTarget].remove()   
        })
    })
})
    
}
    
export { notesMain, notes }