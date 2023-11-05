import { newFactory } from "./home";

let test = {
    "name": "Mark",
    "title": "Testing",
    "description": "My test",
    "duedate": "2021-03-25",
    "priority": "high",
    "Mark": ["one", "two"]
}

localStorage.setItem("newUser", JSON.stringify(newUser));

localStorage.setItem("test", JSON.stringify(test));


let retrieveOject = localStorage.getItem('newUser')
let retrieveOjectTwo = localStorage.getItem('test')

console.log('retrieveOject: ', JSON.parse(retrieveOject))
console.log('retrieveOjectTwo: ', JSON.parse(retrieveOjectTwo))