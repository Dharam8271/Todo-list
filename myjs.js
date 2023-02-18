let addToDoButton = document.getElementById('addToDo');
let todocontainer = document.getElementById('toDocontainer');
let inputField = document.getElementById('inputField');
addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todocontainer.appendChild(paragraph);
inputField.value="";
paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = "line-through";
})
paragraph.addEventListener('dblclick',function(){//this functin is used for the double click remove
    toDocontainer.removeChild(paragraph);
})
})