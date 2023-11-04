import { makeButton } from "./create"
import { listofTodos } from "./home"
import { createCard } from "./submit"

//target the dynamically created remove button
let removeCard = function (){
let remove = document.querySelectorAll(".removeBtn")

remove.forEach(button => {
    
    button.addEventListener("click", () => {
        
        //function gets the index of the clicked button
        let removeTarget = Array.prototype.indexOf.call(remove, button);

        //Splice the index in array list that matches var
        listofTodos.splice(removeTarget, 1)

        remove[removeTarget].remove()
        //event.target.closest('div').remove()

        //target the main div and remove all
        let main = document.getElementById("content")
        main.innerText = "";

        //rebuild the main div and show list
        //createCard()
        //makeButton()
        })
    })
}

// the export default was causing me a issue
export { removeCard }
